import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';
import { saveCar, loadCar } from '../storage';
import { Car, CarPhotos } from '../types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'AddCar'>;
  route: RouteProp<RootStackParamList, 'AddCar'>;
};

const PHOTO_SLOTS: { key: keyof CarPhotos; label: string }[] = [
  { key: 'exterior_frontal', label: 'Exterior frontal' },
  { key: 'exterior_lateral', label: 'Exterior lateral' },
  { key: 'exterior_trasero', label: 'Exterior trasero' },
  { key: 'interior_tablero', label: 'Interior tablero' },
  { key: 'interior_asientos', label: 'Interior asientos' },
];

const SEGMENTOS_PRESET = ['Kei Car', 'Rally', '4x4', '2 puertas', 'Berlina', 'Coupé', 'Sedán', 'SUV', 'Pick-up', 'Furgón'];
const PAISES_PRESET = ['Japón', 'Alemania', 'Francia', 'Italia', 'EE.UU.', 'Reino Unido', 'Corea', 'España', 'Suecia', 'Chile'];

function generateId(nombre: string): string {
  return nombre.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '_' + Date.now();
}

export default function AddCarScreen({ navigation, route }: Props) {
  const editId = route.params?.carId;

  const [nombre, setNombre] = useState('');
  const [paises, setPaises] = useState<string[]>([]);
  const [paisInput, setPaisInput] = useState('');
  const [anioDesde, setAnioDesde] = useState('');
  const [anioHasta, setAnioHasta] = useState('');
  const [segmentos, setSegmentos] = useState<string[]>([]);
  const [segInput, setSegInput] = useState('');
  const [fotos, setFotos] = useState<CarPhotos>({ exterior_frontal: '', exterior_lateral: '', exterior_trasero: '', interior_tablero: '', interior_asientos: '' });
  const [intro, setIntro] = useState('');
  const [specs, setSpecs] = useState({ potencia: '', peso: '', traccion: '', velocidad_max: '' });

  useEffect(() => {
    if (editId) {
      loadCar(editId).then(c => {
        if (!c) return;
        setNombre(c.nombre);
        setPaises(c.pais);
        setAnioDesde(String(c.anio_desde));
        setAnioHasta(String(c.anio_hasta));
        setSegmentos(c.segmentos);
        setFotos(c.fotos);
        setIntro(c.introduccion);
        setSpecs({ potencia: c.specs.potencia ?? '', peso: c.specs.peso ?? '', traccion: c.specs.traccion ?? '', velocidad_max: c.specs.velocidad_max ?? '' });
      });
    }
  }, [editId]);

  function toggleChip<T>(arr: T[], val: T, set: (v: T[]) => void) {
    set(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);
  }

  function handleSave() {
    if (!nombre.trim()) { Alert.alert('Falta el nombre'); return; }
    if (!anioDesde || !anioHasta) { Alert.alert('Faltan los años'); return; }
    const car: Car = {
      id: editId ?? generateId(nombre),
      nombre: nombre.trim(),
      pais: paises,
      anio_desde: Number(anioDesde),
      anio_hasta: Number(anioHasta),
      segmentos,
      introduccion: intro.trim(),
      specs: { potencia: specs.potencia || undefined, peso: specs.peso || undefined, traccion: specs.traccion || undefined, velocidad_max: specs.velocidad_max || undefined },
      fotos,
      fuente_fotos: 'Wikimedia Commons',
      fecha_agregado: new Date().toISOString().split('T')[0],
    };
    saveCar(car);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Field label="NOMBRE">
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="ej. Suzuki Fronte Coupe GX" placeholderTextColor={colors.ink + '60'} />
      </Field>

      <Field label="PAÍS">
        <View style={styles.chips}>{PAISES_PRESET.map(p => <Chip key={p} label={p} active={paises.includes(p)} onPress={() => toggleChip(paises, p, setPaises)} />)}</View>
        <View style={styles.addRow}>
          <TextInput style={[styles.input, { flex: 1 }]} value={paisInput} onChangeText={setPaisInput} placeholder="Otro país..." placeholderTextColor={colors.ink + '60'} />
          <TouchableOpacity style={styles.addBtn} onPress={() => { if (paisInput.trim()) { setPaises([...paises, paisInput.trim()]); setPaisInput(''); } }}>
            <Text style={styles.addBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </Field>

      <Field label="ÉPOCA">
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.yearInput]} value={anioDesde} onChangeText={setAnioDesde} placeholder="Desde" keyboardType="numeric" placeholderTextColor={colors.ink + '60'} />
          <Text style={styles.dash}>–</Text>
          <TextInput style={[styles.input, styles.yearInput]} value={anioHasta} onChangeText={setAnioHasta} placeholder="Hasta" keyboardType="numeric" placeholderTextColor={colors.ink + '60'} />
        </View>
      </Field>

      <Field label="SEGMENTOS">
        <View style={styles.chips}>{SEGMENTOS_PRESET.map(s => <Chip key={s} label={s} active={segmentos.includes(s)} onPress={() => toggleChip(segmentos, s, setSegmentos)} />)}</View>
        <View style={styles.addRow}>
          <TextInput style={[styles.input, { flex: 1 }]} value={segInput} onChangeText={setSegInput} placeholder="Otro segmento..." placeholderTextColor={colors.ink + '60'} />
          <TouchableOpacity style={styles.addBtn} onPress={() => { if (segInput.trim()) { setSegmentos([...segmentos, segInput.trim()]); setSegInput(''); } }}>
            <Text style={styles.addBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </Field>

      <Field label="FOTOS (URL)">
        {PHOTO_SLOTS.map(({ key, label }) => (
          <View key={key} style={styles.photoRow}>
            <Text style={styles.photoLabel}>{label}</Text>
            <View style={styles.photoInputRow}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={fotos[key]}
                onChangeText={v => setFotos(f => ({ ...f, [key]: v }))}
                placeholder="https://..."
                placeholderTextColor={colors.ink + '60'}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.searchBtn}
                onPress={() => navigation.navigate('PhotoSearch', { slot: key })}
              >
                <Text style={styles.searchBtnText}>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Field>

      <Field label="SPECS">
        {(['potencia', 'peso', 'traccion', 'velocidad_max'] as const).map(k => (
          <View key={k} style={styles.specRow}>
            <Text style={styles.specKey}>{k.replace('_', ' ')}</Text>
            <TextInput style={[styles.input, styles.specInput]} value={specs[k]} onChangeText={v => setSpecs(s => ({ ...s, [k]: v }))} placeholder="—" placeholderTextColor={colors.ink + '60'} />
          </View>
        ))}
      </Field>

      <Field label="INTRODUCCIÓN">
        <TextInput
          style={[styles.input, styles.textArea]}
          value={intro}
          onChangeText={setIntro}
          placeholder="Mini descripción del auto..."
          placeholderTextColor={colors.ink + '60'}
          multiline
          numberOfLines={4}
        />
      </Field>

      <TouchableOpacity style={[styles.saveBtn, shadows.hard]} onPress={handleSave}>
        <Text style={styles.saveBtnText}>GUARDAR AUTO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <Text style={{ fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.ink, letterSpacing: 2, marginBottom: spacing.xs }}>{label}</Text>
      {children}
    </View>
  );
}

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={onPress}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper },
  content: { padding: spacing.lg, paddingBottom: spacing.xl },
  input: { borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, padding: spacing.sm, fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.ink },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  dash: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.ink },
  yearInput: { width: 90 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.xs },
  chip: { paddingHorizontal: spacing.sm, paddingVertical: 4, borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2 },
  chipActive: { backgroundColor: colors.yellow },
  chipText: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink },
  chipTextActive: { fontFamily: fonts.display },
  addRow: { flexDirection: 'row', gap: spacing.xs },
  addBtn: { width: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.ink, borderWidth: borders.width, borderColor: colors.ink },
  addBtnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.white },
  photoRow: { marginBottom: spacing.sm },
  photoLabel: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.7, marginBottom: 2 },
  photoInputRow: { flexDirection: 'row', gap: spacing.xs },
  searchBtn: { width: 44, justifyContent: 'center', alignItems: 'center', borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2 },
  searchBtnText: { fontSize: fontSizes.md },
  specRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  specKey: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, width: 100, textTransform: 'uppercase' },
  specInput: { flex: 1 },
  textArea: { height: 100, textAlignVertical: 'top' },
  saveBtn: { backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink, padding: spacing.md, alignItems: 'center', marginTop: spacing.md },
  saveBtnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.white, letterSpacing: 2 },
});
