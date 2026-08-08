import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme/tokens';

import MenuScreen from '../screens/MenuScreen';
import SetupScreen from '../screens/SetupScreen';
import CarCardScreen from '../screens/CarCardScreen';
import AddCarScreen from '../screens/AddCarScreen';
import PhotoSearchScreen from '../screens/PhotoSearchScreen';
import PlayScreen from '../screens/PlayScreen';
import ReplayScreen from '../screens/ReplayScreen';
import CatalogsScreen from '../screens/CatalogsScreen';

export type RootStackParamList = {
  Menu: undefined;
  Setup: undefined;
  CarCard: { carId: string; carIds: string[]; currentIndex: number; jugadorIndex: number };
  AddCar: { carId?: string };
  PhotoSearch: { slot: keyof import('../types').CarPhotos };
  Play: { catalogId: string; jugadores: number };
  Replay: { session: import('../types').GameSession };
  Catalogs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.paper, borderBottomColor: colors.ink, borderBottomWidth: 2 },
          headerTintColor: colors.ink,
          headerTitleStyle: { fontFamily: 'Anton_400Regular', fontSize: 20, letterSpacing: 1 },
          cardStyle: { backgroundColor: colors.paper },
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setup" component={SetupScreen} options={{ title: 'CONFIGURAR PARTIDA' }} />
        <Stack.Screen name="CarCard" component={CarCardScreen} options={{ title: 'FICHA' }} />
        <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'AGREGAR AUTO' }} />
        <Stack.Screen name="PhotoSearch" component={PhotoSearchScreen} options={{ title: 'BUSCAR FOTOS' }} />
        <Stack.Screen name="Play" component={PlayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Replay" component={ReplayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Catalogs" component={CatalogsScreen} options={{ title: 'MIS CATÁLOGOS' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
