import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { colors, fonts, fontSizes, spacing, borders, shadows } from '../theme/tokens';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Menu'> };

export default function MenuScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.paper} />
      <View style={styles.titleBlock}>
        <Text style={styles.title}>CATÁLOGO{'\n'}RODANTE</Text>
        <View style={styles.sticker}><Text style={styles.stickerText}>v1.0</Text></View>
      </View>
      <View style={styles.buttons}>
        <MenuButton label="JUGAR" color={colors.red} onPress={() => navigation.navigate('Setup')} />
        <MenuButton label="AGREGAR AUTO" color={colors.blue} onPress={() => navigation.navigate('AddCar', {})} />
        <MenuButton label="MIS CATÁLOGOS" color={colors.yellow} onPress={() => navigation.navigate('Catalogs')} />
      </View>
    </View>
  );
}

function MenuButton({ label, color, onPress }: { label: string; color: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }, shadows.hard]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper, padding: spacing.lg, justifyContent: 'space-between' },
  titleBlock: { flex: 1, justifyContent: 'center', alignItems: 'flex-start' },
  title: {
    fontFamily: fonts.display,
    fontSize: fontSizes.xxl,
    color: colors.ink,
    lineHeight: fontSizes.xxl * 1.1,
    letterSpacing: 2,
  },
  sticker: {
    marginTop: spacing.sm,
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: borders.width,
    borderColor: colors.ink,
    transform: [{ rotate: '-6deg' }],
  },
  stickerText: { fontFamily: fonts.display, fontSize: fontSizes.sm, color: colors.ink },
  buttons: { gap: spacing.md, paddingBottom: spacing.xl },
  btn: {
    borderWidth: borders.width,
    borderColor: colors.ink,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  btnText: { fontFamily: fonts.display, fontSize: fontSizes.lg, color: colors.ink, letterSpacing: 2 },
});
