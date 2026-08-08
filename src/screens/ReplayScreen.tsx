import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { loadCar } from '../storage';
import { Car } from '../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Replay'>;
  route: RouteProp<RootStackParamList, 'Replay'>;
};

const { width } = Dimensions.get('window');
const AUTOPLAY_MS = 3000;

export default function ReplayScreen({ navigation, route }: Props) {
  const { session } = route.params;
  const [jugadorActual, setJugadorActual] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  const [cars, setCars] = useState<Car[]>([]);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const jugadorKey = `jugador_${jugadorActual + 1}`;
  const jugadorCarIds = session.seleccion_por_jugador[jugadorKey] ?? [];

  useEffect(() => {
    async function load() {
      const loaded = (await Promise.all(jugadorCarIds.map(id => loadCar(id)))).filter((c): c is Car => c !== null);
      setCars(loaded);
      setCarIndex(0);
    }
    load();
  }, [jugadorActual]);

  useEffect(() => {
    if (!playing || cars.length === 0) return;
    timerRef.current = setInterval(() => {
      setCarIndex(i => {
        if (i + 1 < cars.length) return i + 1;
        clearInterval(timerRef.current!);
        setPlaying(false);
        return i;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current!);
  }, [playing, cars]);

  const car = cars[carIndex];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>REPLAY</Text>
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>✕ MENÚ</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs jugadores */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScroll}>
        <View style={styles.tabs}>
          {Array.from({ length: session.jugadores }, (_, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.tab, jugadorActual === i && styles.tabActive, shadows.hard]}
              onPress={() => { setJugadorActual(i); setPlaying(true); }}
            >
              <Text style={[styles.tabText, jugadorActual === i && styles.tabTextActive]}>J{i + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Foto principal */}
      {car ? (
        <>
          <Image
            source={{ uri: car.fotos.exterior_frontal || car.fotos.exterior_lateral }}
            style={styles.mainPhoto}
            resizeMode="cover"
          />
          <View style={styles.carInfo}>
            <Text style={styles.carNombre}>{car.nombre.toUpperCase()}</Text>
            <Text style={styles.carSub}>{car.pais.join(', ')} · {car.anio_desde}–{car.anio_hasta}</Text>
          </View>

          {/* Barra de progreso */}
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${((carIndex + 1) / cars.length) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{carIndex + 1} / {cars.length}</Text>
        </>
      ) : (
        <View style={styles.emptySlot}><Text style={styles.emptyText}>Sin autos</Text></View>
      )}

      {/* Filmstrip */}
      <FlatList
        horizontal
        data={cars}
        keyExtractor={c => c.id}
        showsHorizontalScrollIndicator={false}
        style={styles.filmstrip}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => { setCarIndex(index); setPlaying(false); }}
            style={[styles.thumb, index === carIndex && styles.thumbActive]}
          >
            <Image source={{ uri: item.fotos.exterior_frontal }} style={styles.thumbImg} resizeMode="cover" />
          </TouchableOpacity>
        )}
      />

      {/* Controles */}
      <View style={styles.controls}>
        <TouchableOpacity style={[styles.ctrlBtn, shadows.hard]} onPress={() => setCarIndex(i => Math.max(0, i - 1))}>
          <Text style={styles.ctrlText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ctrlBtn, styles.ctrlPlay, shadows.hard]}
          onPress={() => setPlaying(p => !p)}
        >
          <Text style={styles.ctrlText}>{playing ? '⏸' : '▶'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ctrlBtn, shadows.hard]} onPress={() => setCarIndex(i => Math.min(cars.length - 1, i + 1))}>
          <Text style={styles.ctrlText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: spacing.md, paddingTop: spacing.lg },
  title: { fontFamily: fonts.display, fontSize: fontSizes.xl, color: colors.yellow },
  closeBtn: { padding: spacing.xs },
  closeBtnText: { fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.paper },
  tabsScroll: { maxHeight: 48 },
  tabs: { flexDirection: 'row', gap: spacing.xs, paddingHorizontal: spacing.md, paddingBottom: spacing.xs },
  tab: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderWidth: borders.width, borderColor: colors.paper, backgroundColor: colors.ink },
  tabActive: { backgroundColor: colors.yellow },
  tabText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.paper },
  tabTextActive: { color: colors.ink },
  mainPhoto: { width, height: width * 0.55, backgroundColor: colors.paper2 },
  carInfo: { padding: spacing.md },
  carNombre: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.paper },
  carSub: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.yellow, marginTop: 2 },
  progressBar: { height: 4, backgroundColor: colors.paper2, marginHorizontal: spacing.md },
  progressFill: { height: 4, backgroundColor: colors.red },
  progressText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.paper, opacity: 0.5, textAlign: 'right', paddingRight: spacing.md, marginTop: 2 },
  emptySlot: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontFamily: fonts.body, color: colors.paper, opacity: 0.4 },
  filmstrip: { maxHeight: 70, paddingLeft: spacing.md },
  thumb: { width: 80, height: 56, marginRight: spacing.xs, borderWidth: 2, borderColor: 'transparent' },
  thumbActive: { borderColor: colors.yellow },
  thumbImg: { width: '100%', height: '100%', backgroundColor: colors.paper2 },
  controls: { flexDirection: 'row', justifyContent: 'center', gap: spacing.md, padding: spacing.md },
  ctrlBtn: { width: 52, height: 52, justifyContent: 'center', alignItems: 'center', borderWidth: borders.width, borderColor: colors.paper, backgroundColor: colors.ink },
  ctrlPlay: { backgroundColor: colors.red },
  ctrlText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.paper },
});
