import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Modal,
  RefreshControl,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { FIREBASE_AUTH } from './../Firebase';
import styles from '../styles/HomeStyles';

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [location, setLocation] = useState('Rio Verde, Goiás');
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const spinValue = new Animated.Value(0);

  const getUsername = () => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const emailName = user.email.split('@')[0].toUpperCase();
      setUsername(emailName);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'A permissão para acessar a localização foi negada.');
      return;
    }

    setLoadingLocation(true);
    let { coords } = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = coords;

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
    getUsername();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await AsyncStorage.removeItem('userData');
    setIsLoggingOut(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  const navigateToVetMeet = () => {
    navigation.navigate('VetMeet');
  };

  const navigateToAppointment = () => {
    navigation.navigate('Appointment');
  };

  const navigateToVidas = () => {
    navigation.navigate('LifeScreen');
  };

  const carouselItems = [
    { id: '1', title: 'Dr. José Silva', image: require('../../assets/avatar1.png') },
    { id: '2', title: 'Dra. Maria Souza', image: require('../../assets/avatar2.png') },
    { id: '3', title: 'Dr. Carlos Pereira', image: require('../../assets/avatar3.png') },
    { id: '4', title: 'Dr. Silvio Lima', image: require('../../assets/avatar4.png') },
    { id: '5', title: 'Dr. Marcos Santos', image: require('../../assets/avatar5.png') },
    { id: '6', title: 'Dr. Fernando Almeida', image: require('../../assets/avatar6.png') },
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (width * 0.9));
    setCurrentIndex(newIndex);
  };

  const renderIndicators = () => {
    const totalDots = Math.ceil(carouselItems.length / 3);
    return (
      <View style={styles.indicatorContainer}>
        {Array.from({ length: totalDots }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorDot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      })
    ).start();

    getLocation();
    getUsername();

    setTimeout(() => {
      setRefreshing(false);
      spinValue.setValue(0);
    }, 1500);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/Elli.png')} style={styles.elliBackground} />
      <ScrollView
        contentContainerStyle={{ ...styles.scrollContainer, flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
          />
        }
      >
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
          <TouchableOpacity style={[styles.statCard, styles.leftCard]} onPress={navigateToVidas}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>3.127</Text>
              <Text style={styles.statLabel}>Animais</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={() => openModal({ uri: 'https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png' })}>
              <Image source={{ uri: 'https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png' }} style={styles.avatar} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.statCard, styles.rightCard]} onPress={navigateToAppointment}>
            <View style={styles.statContainer}>
              <Text style={styles.statNumber}>81</Text>
              <Text style={styles.statLabel}>Consultas</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Olá, {username}</Text>
          <Text style={styles.userLocation}>
            {loadingLocation ? 'Obtendo localização...' : location}
          </Text>
        </View>

        <View style={styles.dashboardContainer}>
          <View style={styles.leftColumn}>
            <TouchableOpacity style={[styles.dashboardCard, styles.smallCard, styles.transparentCard]} onPress={navigateToVetMeet}>
              <Ionicons name="people-outline" size={24} color="#68D391" style={styles.iconPosition} />
              <Text style={styles.cardNumber}>21</Text>
              <Text style={styles.cardLabel}>Meet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dashboardCard, styles.smallCard, styles.transparentCard]} onPress={navigateToAppointment}>
              <Ionicons name="calendar-outline" size={24} color="#68D391" style={styles.iconPosition} />
              <Text style={styles.cardNumber}>81</Text>
              <Text style={styles.cardLabel}>Consultas</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.dashboardCard, styles.largeCard, styles.transparentCard]} onPress={navigateToVidas}>
            <Ionicons name="heart-outline" size={24} color="#68D391" style={styles.iconPosition} />
            <Text style={styles.cardNumber}>3.127</Text>
            <Text style={styles.cardLabel}>Vidas</Text>
          </TouchableOpacity>
        </View>

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

        <View style={styles.carouselCardContainer}>
          <Text style={styles.carouselHeader}>Especialistas Favoritos</Text>
          <FlatList
            data={carouselItems}
            renderItem={renderCarouselItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            snapToAlignment="center"
            decelerationRate="fast"
            snapToInterval={width * 0.9}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselList}
          />
          {renderIndicators()}
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <BlurView intensity={80} style={styles.modalContainer}>
            {selectedImage && <Image source={selectedImage} style={styles.modalImage} />}
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
