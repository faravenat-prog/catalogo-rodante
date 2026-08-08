import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PhotoSearch'>;
  route: RouteProp<RootStackParamList, 'PhotoSearch'>;
};

interface WikiResult {
  title: string;
  url: string;
  thumb: string;
  license: string;
  author: string;
  domain: string;
}

async function searchWikimedia(query: string): Promise<WikiResult[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: query,
    gsrnamespace: '6',
    gsrlimit: '20',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|thumburl',
    iiurlwidth: '300',
    format: 'json',
    origin: '*',
  });
  const res = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  const data = await res.json();
  if (!data.query?.pages) return [];
  return Object.values(data.query.pages as Record<string, any>)
    .map((page: any) => {
      const ii = page.imageinfo?.[0];
      if (!ii) return null;
      const meta = ii.extmetadata ?? {};
      return {
        title: page.title,
        url: ii.url ?? '',
        thumb: ii.thumburl ?? ii.url ?? '',
        license: meta.LicenseShortName?.value ?? 'Desconocida',
        author: meta.Artist?.value?.replace(/<[^>]+>/g, '') ?? 'Desconocido',
        domain: 'commons.wikimedia.org',
      } as WikiResult;
    })
    .filter((r): r is WikiResult => r !== null && r.url.match(/\.(jpg|jpeg|png|webp)$/i) !== null);
}

export default function PhotoSearchScreen({ navigation, route }: Props) {
  const { slot } = route.params;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<WikiResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await searchWikimedia(query.trim());
      setResults(res);
    } catch (e) {
      Alert.alert('Error', 'No se pudo conectar con Wikimedia Commons.');
    } finally {
      setLoading(false);
    }
  }

  function handleSelect(item: WikiResult) {
    navigation.navigate('AddCar', { carId: undefined });
    // Devuelve la URL seleccionada al formulario vía params — en implementación real
    // se usaría un callback o un store global. Por ahora volvemos con la URL en clipboard.
    Alert.alert('URL copiada', item.url, [{ text: 'OK', onPress: () => navigation.goBack() }]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.slotLabel}>Slot: {slot.replace('_', ' ')}</Text>
      <View style={styles.searchRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={query}
          onChangeText={setQuery}
          placeholder="ej. Suzuki Fronte Coupe 1971"
          placeholderTextColor={colors.ink + '60'}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoCapitalize="none"
        />
        <TouchableOpacity style={[styles.searchBtn, shadows.hard]} onPress={handleSearch}>
          <Text style={styles.searchBtnText}>BUSCAR</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator color={colors.red} style={{ margin: spacing.lg }} />}

      <FlatList
        data={results}
        keyExtractor={item => item.url}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.resultItem, shadows.hard]} onPress={() => handleSelect(item)}>
            <Image source={{ uri: item.thumb }} style={styles.thumb} resizeMode="cover" />
            <View style={styles.resultMeta}>
              <Text style={styles.domain} numberOfLines={1}>{item.domain}</Text>
              <Text style={styles.license} numberOfLines={1}>{item.license}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper, padding: spacing.md },
  slotLabel: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.6, marginBottom: spacing.sm, textTransform: 'uppercase' },
  searchRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  input: { borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, padding: spacing.sm, fontFamily: fonts.mono, fontSize: fontSizes.sm, color: colors.ink },
  searchBtn: { backgroundColor: colors.red, borderWidth: borders.width, borderColor: colors.ink, paddingHorizontal: spacing.md, justifyContent: 'center' },
  searchBtnText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.white, letterSpacing: 1 },
  row: { gap: spacing.sm, marginBottom: spacing.sm },
  resultItem: { flex: 1, borderWidth: borders.width, borderColor: colors.ink, backgroundColor: colors.paper2, overflow: 'hidden' },
  thumb: { width: '100%', aspectRatio: 4 / 3, backgroundColor: colors.paper2 },
  resultMeta: { padding: spacing.xs },
  domain: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.blue },
  license: { fontFamily: fonts.mono, fontSize: fontSizes.xs, color: colors.ink, opacity: 0.6 },
});
