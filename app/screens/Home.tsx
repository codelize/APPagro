import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header com Logout e Logo */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLogout} style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={require('../../assets/LogoAgroCare.png')} style={styles.logo} />
        </View>

        {/* Perfil e Boas-vindas */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/job/farmer/male' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Olá, Firmino Armstrong</Text>
          <Text style={styles.userLocation}>Rio Verde, Goiás</Text>
        </View>

        {/* Cartões de Informações */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Animais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>81</Text>
            <Text style={styles.cardLabel}>Consultas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>21</Text>
            <Text style={styles.cardLabel}>Saúde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Vidas</Text>
          </TouchableOpacity>
        </View>

        {/* Alertas Recentes */}
        <View style={styles.alertsContainer}>
          <Text style={styles.sectionTitle}>Alertas Recentes</Text>
          <View style={styles.alertItem}>
            <Ionicons name="warning" size={20} color="#FF4C4C" />
            <Text style={styles.alertText}>2 animais com suspeita de febre aftosa.</Text>
          </View>
          <View style={styles.alertItem}>
            <Ionicons name="alert-circle" size={20} color="#FFB74D" />
            <Text style={styles.alertText}>Estoque de vacinas abaixo do esperado.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContainer: {
    paddingBottom: 90,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    width: 110,
    height: 35,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderColor: '#555',
    borderWidth: 2,
  },
  userName: {
    color: '#EAEAEA',
    fontSize: 20,
    fontWeight: '600',
  },
  userLocation: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 3,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cardNumber: {
    color: '#EAEAEA',
    fontSize: 24,
    fontWeight: '600',
  },
  cardLabel: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 5,
  },
  alertsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  sectionTitle: {
    color: '#EAEAEA',
    fontSize: 18,
    marginBottom: 10,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  alertText: {
    color: '#EAEAEA',
    marginLeft: 10,
  },
});
