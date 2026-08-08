import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { loadAllCatalogs } from '../storage';
import { Catalog } from '../types';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Setup'> };

export default function SetupScreen({ navigation }: Props) {
  const [jugadores, setJugadores] = useState(1);
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [selectedCatalog, setSelectedCatalog] = useState<Catalog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllCatalogs().then(c => { setCatalogs(c); setLoading(false); });
  }, []);

  function handleStart() {
    if (!selectedCatalog) return;
    navigation.navigate('Play', { catalogId: selectedCatalog.id, jugadores });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>JUGADORES</Text>
      <View style={styles.playerRow}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
          <TouchableOpacity
            key={n}
            style={[styles.playerBtn, jugadores === n && styles.playerBtnActive, shadows.hard]}
            onPress={() => setJugadores(n)}
          >
            <Text style={[styles.playerBtnText, jugadores === n && styles.playerBtnTextActive]}>{n}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.label, { marginTop: spacing.lg }]}>CATÁLOGO</Text>
      {loading ? (
        <ActivityIndicator color={colors.red} />
      ) : catalogs.length === 0 ? (
        <Text style={styles.empty}>No hay catálogos. Agrega autos primero.</Text>
      ) : (
        <FlatList
          data={catalogs}
          keyExtractor={c => c.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.catalogItem, selectedCatalog?.id === item.id && styles.catalogItemActive, shadows.hard]}
              onPress={() => setSelectedCatalog(item)}
            >
              <Text style={styles.catalogName}>{item.nombre}</Text>
              <Text style={styles.catalogCount}>{item.auto_ids.length} autos</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.startBtn, !selectedCatalog && styles.startBtnDisabled, shadows.hard]}
        onPress={handleStart}
        disabled={!selectedCatalog}
      >
        <Text style={styles.startBtnText}>JUGAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper, padding: spacing.lg },
  label: { fontFamily: fonts.display, fontSize: fontSizes.md, color: colors.ink, letterSpacing: 2, marginBottom: spacing.sm },
  playerRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  playerBtn: {
    width: 44, height: 44, justifyContent: 'center', alignItems: 'center',
    borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2,
  },
  playerBtnActive: { backgroundColor: colors.yellow },
  playerBtnText: { fontFamily: fonts.mono, fontSize: fontSizes.md, color: colors.ink },
  playerBtnTextActive: { fontFamily: fonts.display },
  empty: { fontFamily: fonts.body, fontSize: fontSizes.sm, color: colors.ink, opacity: 0.6 },
  catalogItem: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: spacing.md, marginBottom: spacing.sm,
    borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2,
  },
  catalogItemActive: { backgroundColor: colors.yellow },
  catalogName: { fontFamily: fonts.display, fontSize: fontSizes.md, color: colors.ink },
  catalogCount: { fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.ink },
  startBtn: {
    marginTop: spacing.lg, backgroundColor: colors.red,
    borderWidth: borders.width, borderColor: colors.ink,
    padding: spacing.md, alignItems: 'center',
  },
  startBtnDisabled: { opacity: 0.4 },
  startBtnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.white, letterSpacing: 2 },
});
