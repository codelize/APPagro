import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-deck-swiper';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function VeterinariosFazenda() {
  const navigation = useNavigation();
  const [veterinarios, setVeterinarios] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [showNoMoreVeterinarios, setShowNoMoreVeterinarios] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [swipedCards, setSwipedCards] = useState([]); // Array para armazenar o histórico dos cards descartados
  
  const veterinariosData = [

    {
      id: '1', 
      nome: 'Dr. José Silva', 
      idade: 41, 
      localizacao: 'Fazenda Rio Verde', 
      foto: require('../../assets/vet1.jpg'), 
      especialidade: 'Bovinos e Nutrição Animal', 
      experiencia: 'Veterinário com mais de 20 anos focado em nutrição e manejo sanitário de bovinos.',
      avaliacao: 4.5
    },
    { 
      id: '2', 
      nome: 'Dra. Maria Souza', 
      idade: 34, 
      localizacao: 'Fazenda Vista Alegre', 
      foto: require('../../assets/vet2.jpg'), 
      especialidade: 'Equinos e Fisioterapia Animal', 
      experiencia: 'Especialista em fisioterapia e reabilitação de equinos e animais de grande porte.',
      avaliacao: 4.0
    },
    { 
      id: '3', 
      nome: 'Dr. Carlos Pereira', 
      idade: 50, 
      localizacao: 'Fazenda Boa Vista', 
      foto: require('../../assets/vet3.jpg'), 
      especialidade: 'Saúde Reprodutiva de Bovinos', 
      experiencia: 'Veterinário com mais de 30 anos de atuação em reprodução e genética bovina.',
      avaliacao: 4.8
    },
    { 
      id: '4', 
      nome: 'Dr. Silvio Lima', 
      idade: 34, 
      localizacao: 'Fazenda São João', 
      foto: require('../../assets/vet4.jpg'), 
      especialidade: 'Pequenos Ruminantes', 
      experiencia: 'Especializado em cuidados de saúde para caprinos e ovinos em ambiente rural.',
      avaliacao: 4.6
    },
    { 
      id: '5', 
      nome: 'Dr. Marcos Santos', 
      idade: 43, 
      localizacao: 'Fazenda Nova Esperança', 
      foto: require('../../assets/vet5.jpg'), 
      especialidade: 'Emergência Veterinária Rural', 
      experiencia: 'Atua em emergências e traumas veterinários para animais de grande porte.',
      avaliacao: 4.7
    },
    { 
      id: '6', 
      nome: 'Dr. Fernando Almeida', 
      idade: 34, 
      localizacao: 'Fazenda Paraíso', 
      foto: require('../../assets/vet6.jpg'), 
      especialidade: 'Resgate de Animais Silvestres', 
      experiencia: 'Especialista em reabilitação e conservação de espécies nativas em ambiente rural.',
      avaliacao: 4.9
    },
    { 
      id: '7', 
      nome: 'Dr. Paulo Gonçalves', 
      idade: 34, 
      localizacao: 'Fazenda Verdejante', 
      foto: require('../../assets/vet7.jpg'), 
      especialidade: 'Manejo de Gado Leiteiro', 
      experiencia: 'Veterinário com 25 anos de experiência em produção de leite e bem-estar animal.',
      avaliacao: 4.3
    },
    { 
      id: '8', 
      nome: 'Dra. Tatiane Ribeiro', 
      idade: 31, 
      localizacao: 'Fazenda Boa Terra', 
      foto: require('../../assets/vet8.jpg'), 
      especialidade: 'Medicina Veterinária Equina', 
      experiencia: 'Veterinária focada em reabilitação, prevenção e cuidados intensivos para equinos.',
      avaliacao: 4.4
    },
    { 
      id: '9', 
      nome: 'Dr. Roberto Costa', 
      idade: 37, 
      localizacao: 'Fazenda Campo Alegre', 
      foto: require('../../assets/vet9.jpg'), 
      especialidade: 'Nutrição de Suínos', 
      experiencia: 'Especialista em nutrição e manejo de suínos para produção sustentável.',
      avaliacao: 4.5
    },
    { 
      id: '10', 
      nome: 'Dra. Juliana Martins', 
      idade: 51, 
      localizacao: 'Fazenda Horizonte', 
      foto: require('../../assets/vet10.jpg'), 
      especialidade: 'Zoonoses e Saúde Animal', 
      experiencia: 'Veterinária com experiência em prevenção de zoonoses e controle sanitário em fazendas.',
      avaliacao: 4.2
    },
    { 
      id: '11', 
      nome: 'Dr. Henrique Lopes', 
      idade: 41, 
      localizacao: 'Fazenda da Paz', 
      foto: require('../../assets/vet11.jpg'), 
      especialidade: 'Conservação de Fauna Silvestre', 
      experiencia: 'Veterinário focado em conservação e manejo de espécies silvestres em áreas rurais.',
      avaliacao: 4.7
    },
    { 
      id: '12', 
      nome: 'Dra. Luana Mendes', 
      idade: 33, 
      localizacao: 'Fazenda Luar', 
      foto: require('../../assets/vet12.jpg'), 
      especialidade: 'Reprodução de Gado de Corte', 
      experiencia: 'Especialista em manejo, reprodução e melhoramento genético de gado de corte.',
      avaliacao: 4.6
    },
    { 
      id: '13', 
      nome: 'Dr. Felipe Nascimento', 
      idade: 39, 
      localizacao: 'Fazenda Sol Nascente', 
      foto: require('../../assets/vet13.jpg'), 
      especialidade: 'Clínica Equina', 
      experiencia: 'Veterinário com experiência em cuidados intensivos para equinos em fazendas.',
      avaliacao: 4.3
    },
    { 
      id: '14', 
      nome: 'Dr. Paulo Teixeira', 
      idade: 44, 
      localizacao: 'Fazenda Primavera', 
      foto: require('../../assets/vet14.jpg'), 
      especialidade: 'Produção e Saúde de Suínos', 
      experiencia: 'Veterinário com experiência em suinocultura e técnicas avançadas de manejo.',
      avaliacao: 4.8
    },
    { 
      id: '15', 
      nome: 'Dr. Alan Rocha', 
      idade: 49, 
      localizacao: 'Fazenda São Pedro', 
      foto: require('../../assets/vet15.jpg'), 
      especialidade: 'Veterinária de Campo', 
      experiencia: 'Veterinário com vasta experiência no tratamento de diversos tipos de animais rurais.',
      avaliacao: 4.5
    }
  ];

  useEffect(() => {
    setVeterinarios(veterinariosData);
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
      Alert.alert('Permissão negada', 'A permissão para acessar a localização foi negada.');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords);
  };

  const calculateDistance = (vetLocation) => {
    if (!userLocation) return 'N/A';
    const randomDistance = Math.floor(Math.random() * 10) + 1;
    return `${randomDistance} km`;
  };

  const toggleFavorito = async (id) => {
    let novosFavoritos = [];
    if (favoritos.includes(id)) {
      novosFavoritos = favoritos.filter(favId => favId !== id);
    } else {
      novosFavoritos = [...favoritos, id];
    }

    setFavoritos(novosFavoritos);
    await AsyncStorage.setItem('veterinariosFavoritos', JSON.stringify(novosFavoritos));
  };

  const verDetalhes = (veterinario) => {
    navigation.navigate('VeterinarioDetails', { veterinario });
  };

  const recarregarVeterinarios = () => {
    setVeterinarios(veterinariosData);
    setShowNoMoreVeterinarios(false);
    setSwipedCards([]); // Limpa o histórico de cards descartados ao recarregar
  };

  const handleSwipedCard = (cardIndex) => {
    setSwipedCards((prev) => [...prev, veterinarios[cardIndex]]); // Adiciona o card descartado ao histórico
  };

  const undoLastSwipe = () => {
    if (swipedCards.length > 0) {
      const lastCard = swipedCards.pop(); // Remove o último card do histórico
      setVeterinarios((prev) => [lastCard, ...prev]); // Reinserir o último card descartado na lista
      setSwipedCards([...swipedCards]); // Atualiza o estado do histórico
    }
  };

  // Função para limpar o histórico quando todos os cards são descartados
  const handleSwipedAll = () => {
    setShowNoMoreVeterinarios(true);
    setSwipedCards([]); // Limpa o histórico de swipes
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showNoMoreVeterinarios && (
        <>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Meet</Text>
          </View>
          <Text style={styles.subHeader}>Conheça profissionais da sua região</Text>
        </>
      )}

      {showNoMoreVeterinarios ? (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>Não há mais profissionais na sua região.</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={recarregarVeterinarios}>
            <Ionicons name="refresh-outline" size={24} color="#fff" />
            <Text style={styles.refreshText}>Recarregar</Text>
          </TouchableOpacity>
        </View>
      ) : (
      <Swiper
        cards={veterinarios}
        renderCard={(veterinario) =>
          veterinario ? (
            <View style={styles.veterinarioCard}>
              <TouchableOpacity onPress={() => verDetalhes(veterinario)}>
                <Image source={veterinario.foto} style={styles.veterinarioFoto} />
                <View style={styles.infoContainer}>
                  <Text style={styles.veterinarioNome}>{veterinario.nome}, {veterinario.idade}</Text>
                  <Text style={styles.veterinarioEspecialidade}>{veterinario.especialidade}</Text>
                  <Text style={styles.veterinarioDetalhes}>
                    <Ionicons name="location-outline" size={14} color="#8FD3A7" /> {veterinario.localizacao} {'\n'}
                    <Ionicons name="walk-outline" size={14} color="#8FD3A7" /> {calculateDistance(veterinario.localizacao)}
                  </Text>
                  <Text style={styles.experienciaText}>{veterinario.experiencia}</Text>
                  <View style={styles.avaliacaoContainer}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.avaliacaoText}>{veterinario.avaliacao}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* Removeu-se o botão de favorito (ícone de coração) daqui */}
              <View style={styles.buttonContainer}>
                {/* Exibe o botão Refazer apenas se houver swiped cards */}
                {swipedCards.length > 0 && (
                  <TouchableOpacity onPress={undoLastSwipe} style={styles.redoButton}>
                    <Ionicons name="arrow-undo-outline" size={20} color="#fff" />
                    <Text style={styles.buttonText}></Text>
                  </TouchableOpacity>
                )}
                
                {/* Sempre exibe os botões Contato e Agendar à direita */}
                <TouchableOpacity style={styles.contactButton}>
                  <Ionicons name="call-outline" size={20} color="#fff" />
                  <Text style={styles.buttonText}>Contato</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.scheduleButton}>
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
        backgroundColor={'#1A1A1A'}
        stackSize={3}
        stackSeparation={15}
      />
            )}
          </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    zIndex: 2,
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  headerTitle: {
    color: '#EAEAEA',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#8FD3A7',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    zIndex: 2,
  },
  veterinarioCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 10,
    width: width * 0.9,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
    height: '70%',
    marginTop: 170,
  },
  veterinarioFoto: {
    width: '100%',
    height: '50%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  veterinarioNome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  veterinarioEspecialidade: {
    color: '#A8A8A8',
    fontSize: 16,
    marginVertical: 4,
  },
  veterinarioDetalhes: {
    color: '#A8A8A8',
    fontSize: 16,
    marginTop: 5,
  },
  experienciaText: {
    color: '#B8B8B8',
    fontSize: 14,
    marginTop: 8,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avaliacaoText: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 5,
  },
  favoritoIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  noMoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68D391',
    padding: 15,
    borderRadius: 25,
  },
  refreshText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinha os botões à direita
    alignItems: 'center',
    marginTop: 10,
  },
  redoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Cor laranja para o botão "Refazer"
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    marginRight: 10, // Adiciona espaço entre o botão "Refazer" e os outros
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68D391', // Cor verde para o botão "Contato"
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    marginRight: 10, // Adiciona espaço entre "Contato" e "Agendar"
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6347', // Cor vermelha para o botão "Agendar"
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});