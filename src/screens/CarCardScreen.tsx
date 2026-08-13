import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
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

const { width } = Dimensions.get('window');

export default function CarCardScreen({ navigation, route }: Props) {
  const { carId, carIds, currentIndex, jugadorIndex } = route.params;
  const [car, setCar] = useState<Car | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);

  useEffect(() => { loadCar(carId).then(setCar); }, [carId]);

  if (!car) return <View style={styles.center}><ActivityIndicator color={colors.red} /></View>;

  const photos = PHOTO_KEYS.map(k => car.fotos[k]).filter(Boolean);

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < carIds.length) {
      navigation.replace('CarCard', { carId: carIds[nextIndex], carIds, currentIndex: nextIndex, jugadorIndex });
    } else {
      // último auto del jugador — volver al Play para siguiente jugador
      navigation.goBack();
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Carrusel */}
      <View style={styles.carouselWrapper}>
        <FlatList
          ref={flatRef}
          data={photos}
          keyExtractor={(_, i) => String(i)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => setPhotoIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
          renderItem={({ item }) => (
            <Image
              source={item}
              style={styles.photo}
              contentFit="cover"
              transition={300}
              placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
            />
          )}
        />
        {/* Dots */}
        <View style={styles.dots}>
          {photos.map((_, i) => (
            <View key={i} style={[styles.dot, i === photoIndex && styles.dotActive]} />
          ))}
        </View>
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
  dots: { position: 'absolute', bottom: spacing.sm, alignSelf: 'center', flexDirection: 'row', gap: spacing.xs },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.paper2, borderWidth: 1, borderColor: colors.ink },
  dotActive: { backgroundColor: colors.red },
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
});
