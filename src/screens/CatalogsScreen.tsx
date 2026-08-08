import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { loadAllCatalogs, saveCatalog, loadAllCars } from '../storage';
import { Catalog, Car } from '../types';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Catalogs'> };

function generateCatalogId(nombre: string): string {
  return nombre.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '_' + Date.now();
}

export default function CatalogsScreen({ navigation }: Props) {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPais, setNewPais] = useState('');
  const [selectedCars, setSelectedCars] = useState<string[]>([]);

  useFocusEffect(useCallback(() => {
    async function load() {
      const [cats, cars] = await Promise.all([loadAllCatalogs(), loadAllCars()]);
      setCatalogs(cats);
      setAllCars(cars);
      setLoading(false);
    }
    load();
  }, []));

  function toggleCar(id: string) {
    setSelectedCars(sel => sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
  }

  function handleCreate() {
    if (!newName.trim()) { Alert.alert('Falta el nombre'); return; }
    const catalog: Catalog = {
      id: generateCatalogId(newName),
      nombre: newName.trim(),
      pais_principal: newPais.trim() || 'Global',
      auto_ids: selectedCars,
    };
    saveCatalog(catalog);
    setCatalogs(prev => [...prev, catalog].sort((a, b) => a.nombre.localeCompare(b.nombre)));
    setCreating(false);
    setNewName('');
    setNewPais('');
    setSelectedCars([]);
  }

  if (loading) return <View style={styles.center}><ActivityIndicator color={colors.red} /></View>;

  return (
    <View style={styles.container}>
      {!creating ? (
        <>
          <FlatList
            data={catalogs}
            keyExtractor={c => c.id}
            ListEmptyComponent={<Text style={styles.empty}>No hay catálogos aún.</Text>}
            renderItem={({ item }) => (
              <View style={[styles.card, shadows.hard]}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardName}>{item.nombre}</Text>
                  <Text style={styles.cardMeta}>{item.auto_ids.length} autos · {item.pais_principal}</Text>
                </View>
              </View>
            )}
          />
          <TouchableOpacity style={[styles.createBtn, shadows.hard]} onPress={() => setCreating(true)}>
            <Text style={styles.createBtnText}>+ NUEVO CATÁLOGO</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          data={allCars}
          keyExtractor={c => c.id}
          ListHeaderComponent={
            <View style={styles.form}>
              <Text style={styles.formLabel}>NOMBRE DEL CATÁLOGO</Text>
              <TextInput style={styles.input} value={newName} onChangeText={setNewName} placeholder="ej. Kei Cars Japón" placeholderTextColor={colors.ink + '60'} />
              <Text style={[styles.formLabel, { marginTop: spacing.md }]}>PAÍS PRINCIPAL</Text>
              <TextInput style={styles.input} value={newPais} onChangeText={setNewPais} placeholder="ej. Japón" placeholderTextColor={colors.ink + '60'} />
              <Text style={[styles.formLabel, { marginTop: spacing.md }]}>SELECCIONA AUTOS ({selectedCars.length})</Text>
            </View>
          }
          ListEmptyComponent={<Text style={styles.empty}>No hay autos. Agrega autos primero.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.carRow, selectedCars.includes(item.id) && styles.carRowActive]} onPress={() => toggleCar(item.id)}>
              <Text style={styles.carRowCheck}>{selectedCars.includes(item.id) ? '✓' : '○'}</Text>
              <View>
                <Text style={styles.carRowName}>{item.nombre}</Text>
                <Text style={styles.carRowSub}>{item.pais.join(', ')} · {item.anio_desde}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <View style={styles.formActions}>
              <TouchableOpacity style={[styles.cancelBtn, shadows.hard]} onPress={() => setCreating(false)}>
                <Text style={styles.cancelBtnText}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.saveBtn, shadows.hard]} onPress={handleCreate}>
                <Text style={styles.saveBtnText}>GUARDAR</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper, padding: spacing.md },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.paper },
  empty: { fontFamily: fonts.body, fontSize: fontSizes.sm, color: colors.ink, opacity: 0.5, textAlign: 'center', marginTop: spacing.lg },
  card: { borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, padding: spacing.md, marginBottom: spacing.sm },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardName: { fontFamily: fonts.display, fontSize: fontSizes.md, color: colors.ink },
  cardMeta: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.6 },
  createBtn: { backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink, padding: spacing.md, alignItems: 'center', marginTop: spacing.sm },
  createBtnText: { fontFamily: fonts.display, fontSize: fontSizes.md, color: colors.white, letterSpacing: 2 },
  form: { marginBottom: spacing.md },
  formLabel: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.ink, letterSpacing: 2, marginBottom: spacing.xs },
  input: { borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, padding: spacing.sm, fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.ink, marginBottom: spacing.xs },
  carRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.sm, borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, marginBottom: spacing.xs },
  carRowActive: { backgroundColor: colors.yellow },
  carRowCheck: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.ink, width: 24 },
  carRowName: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.ink },
  carRowSub: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.6 },
  formActions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg, marginBottom: spacing.xl },
  cancelBtn: { flex: 1, borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, padding: spacing.md, alignItems: 'center' },
  cancelBtnText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.ink, letterSpacing: 1 },
  saveBtn: { flex: 1, backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink, padding: spacing.md, alignItems: 'center' },
  saveBtnText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.white, letterSpacing: 1 },
});
