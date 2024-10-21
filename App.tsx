import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ícones para navegação

import LoadingScreen from './app/screens/LoadingScreen'; // Tela de loading
import HomeScreen from './app/screens/HomeScreen'; // Tela onde o usuário pode acessar Login e Cadastro
import Home from './app/screens/Home'; // Tela Home após autenticação
import LoginScreen from './app/screens/Login'; // Tela de Login
import CadastroScreen from './app/screens/CadastroScreen'; // Tela de Cadastro

import AvisosScreen from './app/screens/AvisosScreen'; // Tela de Avisos
import ConsultasScreen from './app/screens/ConsultasScreen'; // Tela de Consultas
import VidasScreen from './app/screens/VidasScreen'; // Tela de Vidas

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
            iconName = 'home-outline'; // Ícone da tela Home
          } else if (route.name === 'Atividades') {
            iconName = 'calendar-outline'; // Ícone de Atividades
          } else if (route.name === 'Menu') {
            iconName = 'menu'; // Ícone de Menu (hambúrguer)
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#68D391', // Cor do ícone ativo
        tabBarInactiveTintColor: '#fff',  // Cor do ícone inativo
        tabBarStyle: {
          backgroundColor: '#1A1A1A', // Ajuste para combinar com a cor de fundo da tela
          borderTopWidth: 0,           // Remover a linha de borda superior para transição suave
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Atividades" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={Home} options={{ headerShown: false }} />
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
        
        {/* Adicionando as novas telas */}
        <Stack.Screen name="Avisos" component={AvisosScreen} />
        <Stack.Screen name="Consultas" component={ConsultasScreen} />
        <Stack.Screen name="Vidas" component={VidasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
