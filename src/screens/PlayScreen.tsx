import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { loadCatalog, loadCarsForCatalog } from '../storage';
import { Car, GameSession } from '../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Play'>;
  route: RouteProp<RootStackParamList, 'Play'>;
};

export default function PlayScreen({ navigation, route }: Props) {
  const { catalogId, jugadores } = route.params;
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [jugadorActual, setJugadorActual] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  const [session, setSession] = useState<GameSession>({
    jugadores,
    catalogo_id: catalogId,
    seleccion_por_jugador: Object.fromEntries(
      Array.from({ length: jugadores }, (_, i) => [`jugador_${i + 1}`, []])
    ),
  });

  useEffect(() => {
    async function load() {
      const catalog = await loadCatalog(catalogId);
      if (!catalog) { setLoading(false); return; }
      const loaded = await loadCarsForCatalog(catalog);
      setCars(loaded);
      setLoading(false);
    }
    load();
  }, [catalogId]);

  if (loading) return <View style={styles.center}><ActivityIndicator color={colors.red} /></View>;
  if (cars.length === 0) return <View style={styles.center}><Text style={styles.empty}>No hay autos en este catálogo.</Text></View>;

  const car = cars[carIndex];
  const jugadorKey = `jugador_${jugadorActual + 1}`;
  const vistosActual = session.seleccion_por_jugador[jugadorKey] ?? [];

  function handleVerFicha() {
    navigation.navigate('CarCard', {
      carId: car.id,
      carIds: [car.id],
      currentIndex: 0,
      jugadorIndex: jugadorActual,
    });
  }

  function handleSiguiente() {
    const newSession = {
      ...session,
      seleccion_por_jugador: {
        ...session.seleccion_por_jugador,
        [jugadorKey]: [...vistosActual, car.id],
      },
    };
    setSession(newSession);

    if (carIndex + 1 < cars.length) {
      setCarIndex(carIndex + 1);
    } else if (jugadorActual + 1 < jugadores) {
      setCarIndex(0);
      setJugadorActual(jugadorActual + 1);
    } else {
      navigation.replace('Replay', { session: newSession });
    }
  }

  function handleTerminar() {
    Alert.alert('Terminar', '¿Terminar el recorrido y ver el replay?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Ver Replay', onPress: () => navigation.replace('Replay', { session }) },
    ]);
  }

  return (
    <View style={styles.container}>
      {/* Header jugador */}
      <View style={styles.header}>
        <Text style={styles.jugadorLabel}>JUGADOR {jugadorActual + 1} / {jugadores}</Text>
        <TouchableOpacity onPress={handleTerminar}>
          <Text style={styles.terminarBtn}>TERMINAR</Text>
        </TouchableOpacity>
      </View>

      {/* Track de progreso */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trackScroll}>
        <View style={styles.track}>
          {cars.map((c, i) => {
            const visto = vistosActual.includes(c.id) || (i < carIndex);
            const actual = i === carIndex;
            return (
              <View key={c.id} style={[styles.trackItem, actual && styles.trackItemActual, visto && styles.trackItemVisto]}>
                <Text style={styles.trackText}>{visto ? '✓' : actual ? String(i + 1) : '?'}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Auto actual */}
      <View style={[styles.carBlock, shadows.hard]}>
        <Text style={styles.carNombre}>{car.nombre.toUpperCase()}</Text>
        <Text style={styles.carSub}>{car.pais.join(', ')} · {car.anio_desde}–{car.anio_hasta}</Text>
        <Text style={styles.carSeg}>{car.segmentos.join(' · ')}</Text>
      </View>

      {/* Acciones */}
      <TouchableOpacity style={[styles.fichaBtn, shadows.hard]} onPress={handleVerFicha}>
        <Text style={styles.fichaBtnText}>VER FICHA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.sigBtn, shadows.hard]} onPress={handleSiguiente}>
        <Text style={styles.sigBtnText}>
          {carIndex + 1 < cars.length || jugadorActual + 1 < jugadores ? 'SIGUIENTE →' : 'VER REPLAY'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper, padding: spacing.md },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.paper },
  empty: { fontFamily: fonts.body, color: colors.ink },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  jugadorLabel: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.ink },
  terminarBtn: { fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.red },
  trackScroll: { maxHeight: 56, marginBottom: spacing.md },
  track: { flexDirection: 'row', gap: spacing.xs, alignItems: 'center' },
  trackItem: {
    width: 36, height: 36, justifyContent: 'center', alignItems: 'center',
    borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2,
  },
  trackItemActual: { backgroundColor: colors.yellow },
  trackItemVisto: { backgroundColor: colors.paper2, opacity: 0.4 },
  trackText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink },
  carBlock: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    borderWidth: borders.width, borderColor: colors.ink,
    backgroundColor: colors.paper2, padding: spacing.xl, marginBottom: spacing.md,
  },
  carNombre: { fontFamily: fonts.display, fontSize: fontSizes.xl, color: colors.ink, textAlign: 'center' },
  carSub: { fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.ink, marginTop: spacing.sm },
  carSeg: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.7, marginTop: spacing.xs },
  fichaBtn: {
    backgroundColor: colors.blue, borderWidth: borders.width, borderColor: colors.ink,
    padding: spacing.md, alignItems: 'center', marginBottom: spacing.sm,
  },
  fichaBtnText: { fontFamily: fonts.display, fontSize: fontSizes.md, color: colors.white, letterSpacing: 2 },
  sigBtn: {
    backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink,
    padding: spacing.md, alignItems: 'center',
  },
  sigBtnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.white, letterSpacing: 2 },
});
