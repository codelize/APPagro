import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation, useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoadingScreen from './app/screens/LoadingScreen';
import HomeScreen from './app/screens/HomeScreen';
import Home from './app/screens/Home';
import LoginScreen from './app/screens/LoginScreen';
import CadastroScreen from './app/screens/RegistrationScreen';
import VetMeet from './app/screens/VetMeet';
import AppointmentScreen from './app/screens/AppointmentScreen';
import LifeScreen from './app/screens/LifeScreen';
import AnimalHistoryScreen from './app/screens/AnimalHistoryScreen';

const Stack = createNativeStackNavigator();

// Barra de navegação customizada para simular as abas
function CustomTabBar({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState('Home'); // Definindo o valor inicial

  const navigateToHome = () => {
    setCurrentScreen('Home');
    navigation.navigate('Home'); // Navega para a tela "Home"
  };

  const navigateToVetMeet = () => {
    setCurrentScreen('VetMeet');
    navigation.navigate('VetMeet'); // Navega para a tela "VetMeet"
  };

  return (
    <View style={{ backgroundColor: '#1A1A1A', borderTopWidth: 1, borderTopColor: '#333', position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 15, paddingTop: 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8 }}>
        
        {/* Área clicável para "Página inicial" */}
        <TouchableOpacity onPress={navigateToHome} style={{ alignItems: 'center', flex: 1 }}>
          <Ionicons name="home-outline" size={25} color={currentScreen === 'Home' ? '#68D391' : '#fff'} />
          <Text style={{ color: currentScreen === 'Home' ? '#68D391' : '#fff', fontSize: 12, marginTop: 4 }}>Página inicial</Text>
        </TouchableOpacity>

        {/* Área clicável para "Meet" */}
        <TouchableOpacity onPress={navigateToVetMeet} style={{ alignItems: 'center', flex: 1 }}>
          <Ionicons name="people-outline" size={25} color={currentScreen === 'VetMeet' ? '#68D391' : '#fff'} />
          <Text style={{ color: currentScreen === 'VetMeet' ? '#68D391' : '#fff', fontSize: 12, marginTop: 4 }}>Meet</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

// Função para encapsular Home e VetMeet em um Stack Navigator
function HomeStack() {
  const navigation = useNavigation();
  const currentScreen = useNavigationState(state => {
    const route = state.routes[state.index];
    return route.name;
  });

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VetMeet" component={VetMeet} />
      </Stack.Navigator>
      {/* Barra de navegação personalizada fixa na parte inferior */}
      <CustomTabBar navigation={navigation} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        {/* Encapsulamento de Home e VetMeet em um Stack para compatibilidade do gesto */}
        <Stack.Screen name="HomeTabs" component={HomeStack} />
        {/* Outras telas */}
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="LifeScreen" component={LifeScreen} />
        <Stack.Screen name="AnimalHistory" component={AnimalHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
