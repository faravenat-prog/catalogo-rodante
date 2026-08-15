import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, FlatList, ActivityIndicator, Modal } from 'react-native';
import { Image } from 'expo-image';
import { downloadAsync, getInfoAsync, makeDirectoryAsync, documentDirectory } from 'expo-file-system/legacy';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { loadCar } from '../storage';
import { Car, CarPhotos } from '../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CarCard'>;
  route: RouteProp<RootStackParamList, 'CarCard'>;
};

const PHOTO_KEYS: (keyof CarPhotos)[] = [
  'exterior_frontal', 'exterior_lateral', 'exterior_trasero',
  'interior_tablero', 'interior_asientos',
];

const { width, height } = Dimensions.get('window');

function urlToFilename(url: string): string {
  let h = 5381;
  for (let i = 0; i < url.length; i++) h = (Math.imul(h, 31) + url.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36) + '.jpg';
}

function getPhotosDir(): string {
  return (documentDirectory ?? '') + 'cr_photos/';
}

async function getLocalPath(url: string): Promise<string | null> {
  const path = getPhotosDir() + urlToFilename(url);
  const info = await getInfoAsync(path);
  return info.exists ? path : null;
}

async function fetchLocalPath(url: string): Promise<string> {
  const dir = getPhotosDir();
  const path = dir + urlToFilename(url);

  const info = await getInfoAsync(path);
  if (info.exists) return path;

  await makeDirectoryAsync(dir, { intermediates: true });
  const result = await downloadAsync(url, path);
  if (result.status < 200 || result.status >= 300) {
    throw new Error(`HTTP ${result.status}`);
  }
  return path;
}

type SlotState =
  | { status: 'loading' }
  | { status: 'ready'; uri: string }
  | { status: 'error'; url: string };

export default function CarCardScreen({ navigation, route }: Props) {
  const { carId, carIds, currentIndex, jugadorIndex } = route.params;
  const [car, setCar] = useState<Car | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [slots, setSlots] = useState<SlotState[]>([]);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const flatRef = useRef<FlatList>(null);

  useEffect(() => { loadCar(carId).then(setCar); }, [carId]);

  useEffect(() => {
    if (!car) return;
    const urls = PHOTO_KEYS.map(k => car.fotos[k]).filter(Boolean);
    if (urls.length === 0) { setSlots([]); return; }

    setSlots(urls.map(() => ({ status: 'loading' })));
    setPhotoIndex(0);

    urls.forEach((url, i) => loadSlot(url, i));
  }, [car]);

  async function loadSlot(url: string, index: number) {
    try {
      // Intenta local primero (sin bajar nada)
      const local = await getLocalPath(url);
      if (local) {
        setSlots(prev => update(prev, index, { status: 'ready', uri: local }));
        return;
      }
      // Descarga y guarda
      const path = await fetchLocalPath(url);
      setSlots(prev => update(prev, index, { status: 'ready', uri: path }));
    } catch {
      setSlots(prev => update(prev, index, { status: 'error', url }));
    }
  }

  function update(prev: SlotState[], i: number, val: SlotState): SlotState[] {
    const next = [...prev];
    next[i] = val;
    return next;
  }

  function handleRetry(index: number, url: string) {
    setSlots(prev => update(prev, index, { status: 'loading' }));
    loadSlot(url, index);
  }

  if (!car) return <View style={styles.center}><ActivityIndicator color={colors.red} /></View>;

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < carIds.length) {
      navigation.replace('CarCard', { carId: carIds[nextIndex], carIds, currentIndex: nextIndex, jugadorIndex });
    } else {
      navigation.goBack();
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Carrusel */}
      <View style={styles.carouselWrapper}>
        <FlatList
          ref={flatRef}
          data={slots}
          keyExtractor={(_, i) => String(i)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => setPhotoIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
          renderItem={({ item: slot, index: i }) => {
            if (slot.status === 'loading') {
              return (
                <View style={[styles.photo, styles.photoCenter]}>
                  <ActivityIndicator color={colors.red} size="large" />
                  <Text style={styles.loadingText}>descargando...</Text>
                </View>
              );
            }
            if (slot.status === 'error') {
              return (
                <View style={[styles.photo, styles.photoCenter]}>
                  <Text style={styles.errorText}>No se pudo cargar</Text>
                  <TouchableOpacity onPress={() => handleRetry(i, slot.url)} style={styles.retryBtn}>
                    <Text style={styles.retryText}>↺  REINTENTAR</Text>
                  </TouchableOpacity>
                </View>
              );
            }
            return (
              <TouchableOpacity activeOpacity={0.9} onPress={() => setFullscreenIndex(i)}>
                <Image
                  source={{ uri: slot.uri }}
                  style={styles.photo}
                  contentFit="cover"
                  transition={200}
                />
              </TouchableOpacity>
            );
          }}
        />
        {/* Dots */}
        <View style={styles.dots}>
          {slots.map((_, i) => (
            <View key={i} style={[styles.dot, i === photoIndex && styles.dotActive]} />
          ))}
        </View>
        {/* Hint fullscreen */}
        {slots[photoIndex]?.status === 'ready' && (
          <View style={styles.fullscreenHint}>
            <Text style={styles.fullscreenHintText}>⛶ toca para ampliar</Text>
          </View>
        )}
      </View>

      {/* Tags */}
      <View style={styles.tags}>
        {car.pais.map(p => <Tag key={p} label={p} color={colors.blue} />)}
        {car.segmentos.map(s => <Tag key={s} label={s} color={colors.pink} />)}
        <Tag label={`${car.anio_desde}–${car.anio_hasta}`} color={colors.yellow} />
      </View>

      {/* Nombre */}
      <Text style={styles.nombre}>{car.nombre.toUpperCase()}</Text>

      {/* Specs */}
      <View style={styles.specsBlock}>
        {Object.entries(car.specs).map(([k, v]) => v ? (
          <View key={k} style={styles.specRow}>
            <Text style={styles.specKey}>{k.replace('_', ' ')}</Text>
            <Text style={styles.specVal}>{v}</Text>
          </View>
        ) : null)}
      </View>

      {/* Introducción */}
      <Text style={styles.intro}>{car.introduccion}</Text>

      {/* Fuente */}
      <Text style={styles.fuente}>Fotos: {car.fuente_fotos}</Text>

      {/* Siguiente */}
      <TouchableOpacity style={[styles.nextBtn, shadows.hard]} onPress={handleNext}>
        <Text style={styles.nextBtnText}>
          {currentIndex + 1 < carIds.length ? 'SIGUIENTE →' : 'FINALIZAR'}
        </Text>
      </TouchableOpacity>

      {/* Modal pantalla completa */}
      <Modal visible={fullscreenIndex !== null} transparent animationType="fade" statusBarTranslucent>
        <TouchableOpacity style={styles.fullscreenOverlay} activeOpacity={1} onPress={() => setFullscreenIndex(null)}>
          {fullscreenIndex !== null && slots[fullscreenIndex]?.status === 'ready' && (
            <Image
              source={{ uri: (slots[fullscreenIndex] as { status: 'ready'; uri: string }).uri }}
              style={styles.fullscreenPhoto}
              contentFit="contain"
            />
          )}
          <View style={styles.fullscreenClose}>
            <Text style={styles.fullscreenCloseText}>✕  CERRAR</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
}

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper },
  content: { paddingBottom: spacing.xl },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.paper },

  carouselWrapper: { position: 'relative' },
  photo: { width, height: width * 0.65, backgroundColor: colors.paper2 },
  photoCenter: { justifyContent: 'center', alignItems: 'center', gap: spacing.sm },
  loadingText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.5 },
  errorText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.6 },
  retryBtn: {
    backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink,
    paddingHorizontal: spacing.md, paddingVertical: spacing.sm,
  },
  retryText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.white, letterSpacing: 1 },

  dots: { position: 'absolute', bottom: spacing.sm, alignSelf: 'center', flexDirection: 'row', gap: spacing.xs },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.paper2, borderWidth: 1, borderColor: colors.ink },
  dotActive: { backgroundColor: colors.red },
  fullscreenHint: {
    position: 'absolute', bottom: spacing.sm, right: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.45)', paddingHorizontal: spacing.xs, paddingVertical: 2,
  },
  fullscreenHintText: { fontFamily: fonts.mono, fontSize: 10, color: colors.white },

  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, padding: spacing.md },
  tag: { paddingHorizontal: spacing.sm, paddingVertical: 2, borderWidth: borders.width, borderColor: colors.ink },
  tagText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink },
  nombre: { fontFamily: fonts.display, fontSize: fontSizes.xl, color: colors.ink, paddingHorizontal: spacing.md, lineHeight: fontSizes.xl * 1.1 },
  specsBlock: { margin: spacing.md, borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2 },
  specRow: { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.sm, borderBottomWidth: 1, borderColor: colors.ink },
  specKey: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, textTransform: 'uppercase' },
  specVal: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink },
  intro: { fontFamily: fonts.body, fontSize: fontSizes.sm, color: colors.ink, paddingHorizontal: spacing.md, lineHeight: fontSizes.sm * 1.6 },
  fuente: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.5, paddingHorizontal: spacing.md, marginTop: spacing.sm },

  nextBtn: {
    margin: spacing.lg, backgroundColor: colors.red,
    borderWidth: borders.width, borderColor: colors.ink,
    padding: spacing.md, alignItems: 'center',
  },
  nextBtnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.white, letterSpacing: 2 },

  fullscreenOverlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.92)',
    justifyContent: 'center', alignItems: 'center',
  },
  fullscreenPhoto: { width, height },
  fullscreenClose: {
    position: 'absolute', top: spacing.xl, right: spacing.md,
    backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: spacing.sm, paddingVertical: spacing.xs,
  },
  fullscreenCloseText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.white, letterSpacing: 1 },
});
