import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function VeterinariosFazenda() {
  const [veterinarios, setVeterinarios] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  // Simulação de dados de veterinários
  const veterinariosData = [
    { id: '1', nome: 'Dr. José Silva', foto: require('../../assets/vet1.jpg'), especialidade: 'Bovinos', localizacao: 'Fazenda Rio Verde' },
    { id: '2', nome: 'Dra. Maria Souza', foto: require('../../assets/vet2.jpg'), especialidade: 'Equinos', localizacao: 'Fazenda Vista Alegre' },
    { id: '3', nome: 'Dr. Carlos Pereira', foto: require('../../assets/vet3.jpg'), especialidade: 'Suínos', localizacao: 'Fazenda Boa Vista' },
    // Adicione mais veterinários aqui
  ];

  // Ao carregar a tela, carrega os veterinários e favoritos salvos
  useEffect(() => {
    setVeterinarios(veterinariosData);
    loadFavoritos();
  }, []);

  // Função para carregar os favoritos do AsyncStorage
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

  // Função para favoritar ou desfavoritar um veterinário
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

  // Função para ver mais detalhes do veterinário
  const verDetalhes = (veterinario) => {
    Alert.alert(`Detalhes de ${veterinario.nome}`, `Especialidade: ${veterinario.especialidade}\nLocalização: ${veterinario.localizacao}`);
  };

  // Renderização de cada veterinário na lista
  const renderVeterinario = ({ item }) => (
    <View style={styles.veterinarioCard}>
      <TouchableOpacity onPress={() => verDetalhes(item)}>
        <Image source={item.foto} style={styles.veterinarioFoto} />
      </TouchableOpacity>
      <Text style={styles.veterinarioNome}>{item.nome}</Text>
      <TouchableOpacity onPress={() => toggleFavorito(item.id)} style={styles.favoritoIcon}>
        <Ionicons
          name={favoritos.includes(item.id) ? 'heart' : 'heart-outline'}
          size={28}
          color={favoritos.includes(item.id) ? '#68D391' : '#A8A8A8'}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Veterinários de Fazenda</Text>
      <FlatList
        data={veterinarios}
        renderItem={renderVeterinario}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.veterinariosList}
      />
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
  veterinariosList: {
    paddingHorizontal: 16,
  },
  veterinarioCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    position: 'relative',
  },
  veterinarioFoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  veterinarioNome: {
    color: '#EAEAEA',
    fontSize: 18,
    marginBottom: 5,
  },
  favoritoIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
