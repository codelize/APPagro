import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoadingScreen from './app/screens/LoadingScreen';
import HomeScreen from './app/screens/HomeScreen';
import Home from './app/screens/Home';
import LoginScreen from './app/screens/LoginScreen';
import CadastroScreen from './app/screens/RegistrationScreen';
import VetMeet from './app/screens/VetMeet';
import AppointmentScreen from './app/screens/AppointmentScreen';
import LifeScreen from './app/screens/LifeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Função para Tab Navigator (Navegação por abas após login)
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Life') {
            iconName = 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#68D391',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopWidth: 0,
          justifyContent: 'center',
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          display: 'none', // Remove o texto dos ícones para centralizar melhor
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Life" component={LifeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          gestureEnabled: true, // Habilita o gesto de deslizar para voltar
          gestureDirection: 'horizontal', // Configura o gesto para direção horizontal
          headerShown: false, // Oculta o cabeçalho por padrão
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={MainTabs} />
        
        {/* Colocando VetMeet no Stack Navigator para compatibilidade do gesto de voltar */}
        <Stack.Screen name="VetMeet" component={VetMeet} />

        {/* Outras telas */}
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="LifeScreen" component={LifeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
