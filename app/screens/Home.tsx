import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Alert, TouchableOpacity, Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);  // Mostra o loading
    await AsyncStorage.removeItem('userData');
    setIsLoggingOut(false); // Oculta o loading
    navigation.navigate('Login');
  };

  const confirmLogout = () => {
    Alert.alert(
      'Tem certeza de que deseja sair da sua conta?',
      '',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: handleLogout,
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const navigateToAnimals = () => {
    navigation.navigate('AnimalsScreen'); // Deve ser implementado no futuro
  };

  const navigateToConsultas = () => {
    navigation.navigate('ConsultasScreen'); // Deve ser implementado no futuro
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem Elli como background */}
      <Image source={require('../../assets/Elli.png')} style={styles.elliBackground} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require('../../assets/LogoAgroCare.png')} style={styles.logo} />
          <TouchableOpacity onPress={confirmLogout} style={styles.menuButton}>
            {isLoggingOut ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </View>

        {/* Contêiner com cartões e avatar */}
        <View style={styles.statsContainer}>
          {/* Cartão Animais */}
          <TouchableOpacity style={[styles.statCard, styles.leftCard]} onPress={navigateToAnimals}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>3.127</Text>
              <Text style={styles.statLabel}>Animais</Text>
            </View>
          </TouchableOpacity>

          {/* Avatar sobreposto */}
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png' }}
              style={styles.avatar}
            />
          </View>

          {/* Cartão Consultas */}
          <TouchableOpacity style={[styles.statCard, styles.rightCard]} onPress={navigateToConsultas}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>81</Text>
              <Text style={styles.statLabel}>Consultas</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Nome e Localização */}
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Olá, Firmino Armstrong</Text>
          <Text style={styles.userLocation}>Rio Verde, Goiás</Text>
        </View>

        {/* Dashboard Grid Cards - Dois menores à esquerda, um maior à direita */}
        <View style={styles.dashboardContainer}>
          <View style={styles.leftColumn}>
            <View style={[styles.dashboardCard, styles.smallCard]}>
              <Ionicons name="alert-circle" size={40} color="#68D391" />
              <Text style={styles.cardNumber}>21</Text>
              <Text style={styles.cardLabel}>Avisos</Text>
            </View>
            <View style={[styles.dashboardCard, styles.smallCard]}>
              <Ionicons name="clipboard" size={40} color="#68D391" />
              <Text style={styles.cardNumber}>81</Text>
              <Text style={styles.cardLabel}>Consultas</Text>
            </View>
          </View>

          {/* Card maior com imagem de fundo */}
          <ImageBackground 
            source={require('../../assets/core.png')} 
            style={[styles.dashboardCard, styles.largeCard]} 
            imageStyle={styles.coreImageBackground} // Aplicar o estilo à imagem de fundo
          >
            <Ionicons name="heart" size={40} color="#68D391" />
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Vidas</Text>
          </ImageBackground>
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
  elliBackground: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    height: 1600,
    resizeMode: 'cover',
    zIndex: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    position: 'relative',
    zIndex: 1,
  },
  avatarContainer: {
    position: 'absolute',
    top: -5,
    left: '37%',
    zIndex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#68D391',
    borderWidth: 3,
    zIndex: 1,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    zIndex: 1,
  },
  leftCard: {
    alignItems: 'flex-start',
    marginLeft: 20,
    zIndex: 1,
  },
  rightCard: {
    alignItems: 'flex-end',
    marginRight: 20,
    zIndex: 1,
  },
  statContainer: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#EAEAEA',
    fontSize: 24,
    fontWeight: '600',
  },
  statLabel: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 5,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    color: '#EAEAEA',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  userLocation: {
    color: '#A8A8A8',
    fontSize: 14,
  },
  dashboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -10,
    marginBottom: 20,
    zIndex: 1,
  },
  leftColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 1,
  },
  dashboardCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.1,
    zIndex: 1,
    width: '100%',
  },
  smallCard: {
    flex: 1,
    zIndex: 1,
    height: 150,
    marginBottom: 11,
  },
  largeCard: {
    flex: 1,
    zIndex: 1,
    marginLeft: 10,
    height: 310,
  },
  cardNumber: {
    color: '#68D391',
    fontSize: 24,
    fontWeight: '600',
  },
  cardLabel: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 5,
  },
  coreImageBackground: {
    width: '50%',
    height: '70%',
    resizeMode: 'contain',
    opacity: 0.8,
    position: 'absolute',
    zIndex: -1,
    top: '30%',
    left: '30%',
  },
  alertsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
    zIndex: 1,
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
  menuButton: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 12,
  },
});
