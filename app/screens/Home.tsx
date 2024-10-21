import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Alert, TouchableOpacity, Text, View, ImageBackground, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window'); // Largura da tela para o carrossel

export default function Home() {
  const navigation = useNavigation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [location, setLocation] = useState('Rio Verde, Goiás'); // Localização inicial fixa
  const [loadingLocation, setLoadingLocation] = useState(false); // Carregando a localização
  const [currentIndex, setCurrentIndex] = useState(0); // Para controlar o índice atual do carrossel

  // Função para obter permissões e localização
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'A permissão para acessar a localização foi negada.');
      return;
    }

    setLoadingLocation(true);
    let { coords } = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = coords;

    // Requisição à API Nominatim para converter em cidade/estado
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        const city = data.address.city || data.address.town || data.address.village;
        const state = data.address.state;
        const country = data.address.country;
        setLocation(`${city}, ${state}, ${country}`);
        setLoadingLocation(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingLocation(false);
        Alert.alert('Erro ao converter localização', 'Não foi possível converter sua localização.');
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await AsyncStorage.removeItem('userData');
    setIsLoggingOut(false);
    navigation.navigate('Login');
  };

  const confirmLogout = () => {
    Alert.alert(
      'Tem certeza de que deseja sair da sua conta?',
      '',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: handleLogout, style: 'destructive' },
      ],
      { cancelable: true }
    );
  };

  // Função para navegação para as novas telas
  const navigateToAvisos = () => {
    navigation.navigate('Avisos');
  };
  const navigateToConsultas = () => {
    navigation.navigate('Consultas');
  };
  const navigateToVidas = () => {
    navigation.navigate('Vidas');
  };

  // Dados para o carrossel
  const carouselItems = [
    { id: '1', title: 'Especialista 1', image: require('../../assets/avatar1.png') },
    { id: '2', title: 'Especialista 2', image: require('../../assets/avatar2.png') },
    { id: '3', title: 'Especialista 3', image: require('../../assets/avatar3.png') },
    { id: '4', title: 'Especialista 4', image: require('../../assets/avatar4.png') },
    { id: '5', title: 'Especialista 5', image: require('../../assets/avatar5.png') },
    { id: '6', title: 'Especialista 6', image: require('../../assets/avatar6.png') },
  ];

  // Renderização do item do carrossel
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );

  // Controla o índice da página ao arrastar o carrossel
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x; 
    const newIndex = Math.round(contentOffsetX / (width * 0.9)); // Calcula a página atual com base no conteúdo deslocado
    setCurrentIndex(newIndex); // Atualiza o índice da página atual
  };
  
  // Função que renderiza os indicadores de página
  const renderIndicators = () => {
    const totalDots = Math.ceil(carouselItems.length / 3); // 3 itens por página
    return (
      <View style={styles.indicatorContainer}>
        {Array.from({ length: totalDots }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot, // Se currentIndex for igual ao índice, será ativo
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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

        <View style={styles.statsContainer}>
          <TouchableOpacity style={[styles.statCard, styles.leftCard]} onPress={navigateToConsultas}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>3.127</Text>
              <Text style={styles.statLabel}>Animais</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png' }}
              style={styles.avatar}
            />
          </View>

          <TouchableOpacity style={[styles.statCard, styles.rightCard]} onPress={navigateToConsultas}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>81</Text>
              <Text style={styles.statLabel}>Consultas</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Olá, Firmino Armstrong</Text>
          <Text style={styles.userLocation}>
            {loadingLocation ? 'Obtendo localização...' : location}
          </Text>
        </View>

        {/* Dashboard Grid Cards */}
        <View style={styles.dashboardContainer}>
          <View style={styles.leftColumn}>
            <TouchableOpacity style={[styles.dashboardCard, styles.smallCard, styles.transparentCard]} onPress={navigateToAvisos}>
              <Ionicons name="notifications-outline" size={24} color="#68D391" style={styles.iconTopRight} />
              <Text style={styles.cardNumber}>21</Text>
              <Text style={styles.cardLabel}>Avisos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dashboardCard, styles.smallCard, styles.transparentCard]} onPress={navigateToConsultas}>
              <Ionicons name="information-circle-outline" size={24} color="#68D391" style={styles.iconTopRight} />
              <Text style={styles.cardNumber}>81</Text>
              <Text style={styles.cardLabel}>Consultas</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.dashboardCard, styles.largeCard, styles.transparentCard]} onPress={navigateToVidas}>
            <Ionicons name="heart-outline" size={24} color="#68D391" style={styles.iconTopRight} />
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Vidas</Text>
          </TouchableOpacity>
        </View>

        {/* Avisos Recentes */}
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

        {/* Carrossel dentro de um card */}
        <View style={styles.carouselCardContainer}>
          <Text style={styles.carouselHeader}>Especialistas Favoristos</Text>
          <FlatList
          data={carouselItems}
          renderItem={renderCarouselItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          onScroll={handleScroll} // Detecta a rolagem e chama handleScroll
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={width * 0.9} // Garante que a rolagem do carrossel seja feita de 3 em 3
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselList}
        />
          {renderIndicators()}
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
  menuButton: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 12,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute', // Mantém a posição relativa ao card
    top: 25, // Ajusta para a parte superior
    right: 20,// Ajusta a posição vertical para ficar no topo do último especialista
  },
  indicatorDot: {
    width: 10, // Altera para o formato achatado
    height: 6,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#68D391',
  },
  inactiveDot: {
    backgroundColor: '#A8A8A8',
  },
  carouselList: {
    paddingHorizontal: 10,
  },
  carouselItem: {
    width: (width * 0.9) / 3 - 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  carouselImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  carouselTitle: {
    color: '#EAEAEA',
    fontSize: 14,
    textAlign: 'center',
  },
  carouselCardContainer: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 10,
    left: '-02.4%',
    width: '105%', // Ajuste para a largura total da tela
    marginBottom: 20,
    position: 'relative', // Permite que o indicador seja posicionado dentro do card
  },
  carouselHeader: {
    color: '#EAEAEA',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 100,
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
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.1,
    zIndex: 1,
    width: '100%',
    position: 'relative',
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
  transparentCard: {
    backgroundColor: 'rgba(51, 51, 51, 0.7)',
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
    marginBottom: 10,
    padding: 15,
    left: '-02.4%',
    backgroundColor: '#333',
    borderRadius: 10,
    zIndex: 1,
    width: '105%', // Ajuste para a largura total da tela
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
