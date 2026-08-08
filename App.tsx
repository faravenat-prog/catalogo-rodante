import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Anton_400Regular } from '@expo-google-fonts/anton';
import { ArchivoBlack_400Regular } from '@expo-google-fonts/archivo-black';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import AppNavigator from './src/navigation';
import { colors } from './src/theme/tokens';
import { seedIfNeeded } from './src/storage/seed';

export default function App() {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
    ArchivoBlack_400Regular,
    JetBrainsMono_400Regular,
  });

  if (fontsLoaded) seedIfNeeded();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.paper }}>
        <ActivityIndicator color={colors.red} />
      </View>
    );
  }

  return <AppNavigator />;
}
