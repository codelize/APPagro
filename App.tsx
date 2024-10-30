import React from 'react';
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

const Stack = createNativeStackNavigator();

// Barra de navegação customizada para simular as abas
function CustomTabBar({ navigation, currentScreen }) {
  return (
    <View style={{ backgroundColor: '#1A1A1A', borderTopWidth: 1, borderTopColor: '#333', position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 15, paddingTop: 0 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 5 }}>
        
        {/* Área clicável para "Página inicial" */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: 'center', flex: 1 }}>
          <View style={{ borderWidth: currentScreen === 'Home' ? 2 : 0, borderColor: '#68D391', borderRadius: 15, padding: 4 }}>
            <Ionicons name="home-outline" size={25} color={currentScreen === 'Home' ? '#68D391' : '#fff'} />
          </View>
          <Text style={{ color: currentScreen === 'Home' ? '#68D391' : '#fff', fontSize: 12, marginTop: 4 }}>Página inicial</Text>
          {currentScreen === 'Home' && <View style={{ width: 50, height: 3, backgroundColor: '#68D391', marginTop: 4 }} />}
        </TouchableOpacity>
        
        {/* Área clicável para "Meet" */}
        <TouchableOpacity onPress={() => navigation.navigate('VetMeet')} style={{ alignItems: 'center', flex: 1 }}>
          <View style={{ borderWidth: currentScreen === 'VetMeet' ? 2 : 0, borderColor: '#68D391', borderRadius: 15, padding: 4 }}>
            <Ionicons name="people-outline" size={25} color={currentScreen === 'VetMeet' ? '#68D391' : '#fff'} />
          </View>
          <Text style={{ color: currentScreen === 'VetMeet' ? '#68D391' : '#fff', fontSize: 12, marginTop: 4 }}>Meet</Text>
          {currentScreen === 'VetMeet' && <View style={{ width: 50, height: 3, backgroundColor: '#68D391', marginTop: 4 }} />}
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
      <CustomTabBar navigation={navigation} currentScreen={currentScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
