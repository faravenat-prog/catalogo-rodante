import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, FlatList, ActivityIndicator, Modal } from 'react-native';
import { Image } from 'expo-image';
import { File, Directory, Paths } from 'expo-file-system';
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

// Persistent folder: {documentDirectory}/cr_photos/
const PHOTOS_DIR = new Directory(Paths.document, 'cr_photos');

function urlToFilename(url: string): string {
  let h = 5381;
  for (let i = 0; i < url.length; i++) h = (Math.imul(h, 31) + url.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36) + '.jpg';
}

function getLocalUri(url: string): string | null {
  const file = new File(PHOTOS_DIR, urlToFilename(url));
  return file.exists ? file.uri : null;
}

async function downloadPhoto(url: string): Promise<string> {
  if (!PHOTOS_DIR.exists) PHOTOS_DIR.create();
  const dest = new File(PHOTOS_DIR, urlToFilename(url));
  if (dest.exists) return dest.uri;
  try {
    const saved = await File.downloadFileAsync(url, dest);
    return saved.uri;
  } catch (e) {
    if (dest.exists) dest.delete();
    throw e;
  }
}

export default function CarCardScreen({ navigation, route }: Props) {
  const { carId, carIds, currentIndex, jugadorIndex } = route.params;
  const [car, setCar] = useState<Car | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  // URI por slot: file:// si está descargada, URL remota si no
  const [sources, setSources] = useState<string[]>([]);
  // slots con error al cargar desde URL remota
  const [errors, setErrors] = useState<Record<number, boolean>>({});
  // cambia key para forzar remount del Image en retry
  const [retryKeys, setRetryKeys] = useState<Record<number, number>>({});
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const flatRef = useRef<FlatList>(null);

  useEffect(() => { loadCar(carId).then(setCar); }, [carId]);

  useEffect(() => {
    if (!car) return;
    const urls = PHOTO_KEYS.map(k => car.fotos[k]).filter(Boolean);
    // Check locally which are already downloaded (synchronous)
    setSources(urls.map(url => getLocalUri(url) ?? url));
    setErrors({});
    setRetryKeys({});
    setDownloadProgress(0);
  }, [car]);

  if (!car) return <View style={styles.center}><ActivityIndicator color={colors.red} /></View>;

  const photoUrls = PHOTO_KEYS.map(k => car.fotos[k]).filter(Boolean);
  const localCount = sources.filter(s => s.startsWith('file://')).length;
  const allLocal = localCount === sources.length && sources.length > 0;

  async function handleDownload() {
    setDownloading(true);
    let done = 0;
    const next = [...sources];
    for (let i = 0; i < photoUrls.length; i++) {
      if (next[i]?.startsWith('file://')) {
        done++;
        setDownloadProgress(done);
        continue;
      }
      try {
        const localUri = await downloadPhoto(photoUrls[i]);
        next[i] = localUri;
        setSources([...next]);
        setErrors(prev => ({ ...prev, [i]: false }));
      } catch {
        // Leave as remote URL; user can retry later
      }
      done++;
      setDownloadProgress(done);
    }
    setDownloading(false);
  }

  function handleRetry(index: number) {
    setErrors(prev => ({ ...prev, [index]: false }));
    setRetryKeys(prev => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  }

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < carIds.length) {
      navigation.replace('CarCard', { carId: carIds[nextIndex], carIds, currentIndex: nextIndex, jugadorIndex });
    } else {
      navigation.goBack();
    }
  }

  function downloadButtonLabel() {
    if (downloading) return `DESCARGANDO ${downloadProgress}/${photoUrls.length}...`;
    if (allLocal) return '✓  FOTOS GUARDADAS';
    return `⬇  DESCARGAR FOTOS${localCount > 0 ? ` (${localCount}/${photoUrls.length})` : ''}`;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Carrusel */}
      <View style={styles.carouselWrapper}>
        <FlatList
          ref={flatRef}
          data={sources}
          keyExtractor={(_, i) => String(i)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => setPhotoIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
          renderItem={({ item: uri, index: i }) =>
            errors[i] ? (
              <View style={[styles.photo, styles.photoCenter]}>
                <Text style={styles.errorText}>No se cargó la foto</Text>
                <TouchableOpacity onPress={() => handleRetry(i)} style={styles.retryBtn}>
                  <Text style={styles.retryText}>↺  REINTENTAR</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity activeOpacity={0.9} onPress={() => setFullscreenIndex(i)}>
                <Image
                  key={`${i}-${retryKeys[i] || 0}`}
                  source={{ uri }}
                  style={styles.photo}
                  contentFit="cover"
                  transition={200}
                  placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                  onError={() => !uri.startsWith('file://') && setErrors(prev => ({ ...prev, [i]: true }))}
                />
              </TouchableOpacity>
            )
          }
        />
        {/* Dots */}
        <View style={styles.dots}>
          {sources.map((_, i) => (
            <View key={i} style={[styles.dot, i === photoIndex && styles.dotActive]} />
          ))}
        </View>
        {/* Hint fullscreen */}
        {sources[photoIndex] && !errors[photoIndex] && (
          <View style={styles.fullscreenHint}>
            <Text style={styles.fullscreenHintText}>⛶ toca para ampliar</Text>
          </View>
        )}
      </View>

      {/* Botón descarga */}
      <TouchableOpacity
        style={[styles.downloadBtn, allLocal && styles.downloadBtnDone, downloading && styles.downloadBtnBusy]}
        onPress={handleDownload}
        disabled={downloading || allLocal}
      >
        {downloading
          ? <ActivityIndicator color={colors.ink} size="small" style={{ marginRight: spacing.xs }} />
          : null
        }
        <Text style={[styles.downloadText, allLocal && styles.downloadTextDone]}>
          {downloadButtonLabel()}
        </Text>
      </TouchableOpacity>

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
          {fullscreenIndex !== null && sources[fullscreenIndex] && (
            <Image
              source={{ uri: sources[fullscreenIndex] }}
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

  downloadBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    marginHorizontal: spacing.md, marginTop: spacing.sm,
    paddingVertical: spacing.sm, paddingHorizontal: spacing.md,
    borderWidth: borders.width, borderColor: colors.ink,
    backgroundColor: colors.yellow,
  },
  downloadBtnDone: { backgroundColor: colors.paper2 },
  downloadBtnBusy: { backgroundColor: colors.paper2 },
  downloadText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, letterSpacing: 0.5 },
  downloadTextDone: { opacity: 0.5 },

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
