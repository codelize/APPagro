import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, ActivityIndicator, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-deck-swiper';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIRESTORE_DB, FIREBASE_STORAGE } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from '../styles/VetMeetStyles';
import Header from '../components/Header';

export default function VetMeet() {
  const navigation = useNavigation();
  const [veterinarios, setVeterinarios] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [showNoMoreVeterinarios, setShowNoMoreVeterinarios] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [swipedCards, setSwipedCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const scaleValue = useState(new Animated.Value(0))[0];

  const fetchVeterinarios = async () => {
    setLoading(true);
    try {
      const veterinarioCollection = collection(FIRESTORE_DB, 'professionals');
      const querySnapshot = await getDocs(veterinarioCollection);

      const veterinariosData = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = null;
          if (data.imageName) {
            const imageRef = ref(FIREBASE_STORAGE, `veterinario_images/${data.imageName}`);
            imageUrl = await getDownloadURL(imageRef);
          }

          return {
            id: doc.id,
            nome: data.gen === 'M' ? `Dr. ${data.nome}` : `Dra. ${data.nome}`,
            idade: data.idade,
            localizacao: data.localizacao,
            foto: imageUrl || 'https://via.placeholder.com/150',
            especialidade: data.especialidade,
            experiencia: data.experiencia,
            avaliacao: data.avaliacao,
          };
        })
      );

      setVeterinarios(veterinariosData);
    } catch (error) {
      console.error("Erro ao buscar dados do Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVeterinarios();
    loadFavoritos();
    getUserLocation();
  }, []);

  const loadFavoritos = async () => {
    try {
      const favs = await AsyncStorage.getItem('veterinariosFavoritos');
      if (favs !== null) {
        setFavoritos(JSON.parse(favs));
      }
    } catch (error) {
      console.log('Erro ao carregar favoritos:', error);
    }
  };

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setModalMessage('A permissão para acessar a localização foi negada.');
      showModal();
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords);
  };

  const calculateDistance = () => {
    if (!userLocation) return 'N/A';
    const randomDistance = Math.floor(Math.random() * 10) + 1;
    return `${randomDistance} km`;
  };

  const toggleFavorito = async (id) => {
    const novosFavoritos = favoritos.includes(id)
      ? favoritos.filter((favId) => favId !== id)
      : [...favoritos, id];

    setFavoritos(novosFavoritos);
    await AsyncStorage.setItem('veterinariosFavoritos', JSON.stringify(novosFavoritos));
  };

  const handleImagePress = () => {
    // Função vazia apenas para capturar o toque
  };

  const recarregarVeterinarios = () => {
    fetchVeterinarios();
    setShowNoMoreVeterinarios(false);
    setSwipedCards([]);
  };

  const handleSwipedCard = (cardIndex) => {
    setSwipedCards((prev) => [...prev, veterinarios[cardIndex]]);
  };

  const undoLastSwipe = () => {
    if (swipedCards.length > 0) {
      const lastCard = swipedCards.pop();
      setVeterinarios((prev) => [lastCard, ...prev]);
      setSwipedCards([...swipedCards]);
    }
  };

  const handleSwipedAll = () => {
    setShowNoMoreVeterinarios(true);
    setSwipedCards([]);
  };

  const showModal = () => {
    setModalVisible(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ zIndex: 10 }}>
        <Header title="Meet" onBackPress={() => navigation.goBack()} />
      </View>

      <Text style={styles.subHeader}>Conheça profissionais da sua região</Text>

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : showNoMoreVeterinarios ? (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>Não há mais profissionais na sua região.</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={recarregarVeterinarios}>
            <Ionicons name="refresh-outline" size={24} color="#fff" />
            <Text style={styles.refreshText}>Recarregar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, marginTop: -200 }}>
          <Swiper
            cards={veterinarios}
            renderCard={(veterinario) =>
              veterinario ? (
                <View style={styles.veterinarioCard}>
                  <TouchableOpacity onPress={handleImagePress} activeOpacity={0.8}>
                    <Image source={{ uri: veterinario.foto }} style={styles.veterinarioFoto} />
                    <View style={styles.infoContainer}>
                      <Text style={styles.veterinarioNome}>
                        {veterinario.nome}, {veterinario.idade}
                      </Text>
                      <Text style={styles.veterinarioEspecialidade}>{veterinario.especialidade}</Text>
                      <Text style={styles.veterinarioDetalhes}>
                        <Ionicons name="location-outline" size={14} color="#8FD3A7" /> {veterinario.localizacao}{' '}
                        {'\n'}
                        <Ionicons name="walk-outline" size={14} color="#8FD3A7" /> {calculateDistance()}
                      </Text>
                      <Text style={styles.experienciaText}>{veterinario.experiencia}</Text>
                      <View style={styles.avaliacaoContainer}>
                        <Ionicons name="star" size={14} color="#FFD700" />
                        <Text style={styles.avaliacaoText}>{veterinario.avaliacao}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.buttonContainer}>
                    {swipedCards.length > 0 && (
                      <TouchableOpacity onPress={undoLastSwipe} style={styles.redoButton}>
                        <Ionicons name="arrow-undo-outline" size={20} color="#fff" />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.contactButton}
                      onPress={() => {
                        setModalMessage("Contato não está disponível. Tente novamente mais tarde.");
                        showModal();
                      }}
                    >
                      <Ionicons name="call-outline" size={20} color="#fff" />
                      <Text style={styles.buttonText}>Contato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.scheduleButton}
                      onPress={() => {
                        setModalMessage("Opção de agendamento não está disponível no momento. Tente novamente mais tarde.");
                        showModal();
                      }}
                    >
                      <Ionicons name="calendar-outline" size={20} color="#fff" />
                      <Text style={styles.buttonText}>Agendar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null
            }
            onSwiped={(cardIndex) => handleSwipedCard(cardIndex)}
            onSwipedAll={handleSwipedAll}
            cardIndex={0}
            backgroundColor="transparent"
            stackSize={3}
            stackSeparation={25}
            disableBottomSwipe
            disableTopSwipe
          />
        </View>
      )}

      {/* Modal personalizado */}
      <Modal transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
            <Ionicons name="alert-circle-outline" size={48} color="#FFD700" style={{ marginBottom: 15 }} />
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
