import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-deck-swiper';

const { width } = Dimensions.get('window');

export default function VeterinariosFazenda() {
  const [veterinarios, setVeterinarios] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [showNoMoreVeterinarios, setShowNoMoreVeterinarios] = useState(false); // Estado para controlar se os cards acabaram

  // Simulação de dados de veterinários
  const veterinariosData = [
    { id: '1', nome: 'Dr. José Silva', idade: 45, localizacao: 'Fazenda Rio Verde', distancia: '1 km', foto: require('../../assets/vet1.jpg'), especialidade: 'Bovinos' },
    { id: '2', nome: 'Dra. Maria Souza', idade: 38, localizacao: 'Fazenda Vista Alegre', distancia: '3 km', foto: require('../../assets/vet2.jpg'), especialidade: 'Equinos' },
    { id: '3', nome: 'Dr. Carlos Pereira', idade: 50, localizacao: 'Fazenda Boa Vista', distancia: '5 km', foto: require('../../assets/vet3.jpg'), especialidade: 'Suínos' },
  ];

  useEffect(() => {
    setVeterinarios(veterinariosData);
    loadFavoritos();
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
    if (veterinario.nome === 'Dr. José Silva') {
      navigation.navigate('VeterinarioDetails', { veterinario }); // Navegar para a tela de detalhes
    }
  };
  // Função para recarregar os profissionais (resetar o swiper)
  const recarregarVeterinarios = () => {
    setVeterinarios(veterinariosData);
    setShowNoMoreVeterinarios(false); // Ocultar mensagem de aviso
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Veterinários de Fazenda</Text>

      {!showNoMoreVeterinarios ? (
        <Swiper
          cards={veterinarios}
          renderCard={(veterinario) =>
            veterinario ? ( // Verificação de segurança
              <View style={styles.veterinarioCard}>
                <TouchableOpacity onPress={() => verDetalhes(veterinario)}>
                  <Image source={veterinario.foto} style={styles.veterinarioFoto} />
                  <View style={styles.infoContainer}>
                    <Text style={styles.veterinarioNome}>{veterinario.nome}, {veterinario.idade}</Text>
                    <Text style={styles.veterinarioDetalhes}>
                      <Ionicons name="location-outline" size={14} color="#fff" /> {veterinario.localizacao} {'\n'}
                      <Ionicons name="walk-outline" size={14} color="#fff" /> {veterinario.distancia}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorito(veterinario.id)} style={styles.favoritoIcon}>
                  <Ionicons
                    name={favoritos.includes(veterinario.id) ? 'heart' : 'heart-outline'}
                    size={28}
                    color={favoritos.includes(veterinario.id) ? '#68D391' : '#A8A8A8'}
                  />
                </TouchableOpacity>
              </View>
            ) : null // Se não houver veterinário, não renderizar nada
          }
          onSwipedAll={() => setShowNoMoreVeterinarios(true)} // Exibe o aviso quando todos os cards forem deslizados
          cardIndex={0}
          backgroundColor={'#1A1A1A'}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'red',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: '#68D391',
                  borderColor: '#68D391',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      ) : (
        // Exibe a mensagem de aviso e o botão de recarregar quando não há mais veterinários
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>Não há mais profissionais na sua região.</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={recarregarVeterinarios}>
            <Ionicons name="refresh-outline" size={24} color="#fff" />
            <Text style={styles.refreshText}>Recarregar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    color: '#EAEAEA',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '600',
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
  },
  veterinarioFoto: {
    width: '100%',
    height: '70%',
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
  veterinarioDetalhes: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
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
});
