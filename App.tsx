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
import VidasScreen from './app/screens/LifeScreen';

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
          } else if (route.name === 'Match') {
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
      <Tab.Screen name="Match" component={VetMeet} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false }} />
        
        {/* Configuração com gestureEnabled para deslizar e voltar */}
        <Stack.Screen 
          name="VetMeet" 
          component={VetMeet} 
          options={{
            headerShown: false,
            gestureEnabled: true, // Habilita o gesto de deslizar para voltar
            gestureDirection: 'horizontal', // Configura o gesto para horizontal
          }}  
        /> 
        
        {/* Outras telas */}
        <Stack.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Vidas" component={VidasScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
