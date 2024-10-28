import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/LifeScreenStyles'; // Importando os estilos

const animalStock = [
  {
    id: '1',
    name: 'Boi Bravo',
    species: 'Nelore',
    birthDate: '2018-06-01',
    healthStatus: 'Saudável',
    weight: '500 kg',
    lastConsultation: '2024-01-15',
    location: 'Setor 3',
    marketValue: 'R$ 5.000,00',
  },
  {
    id: '2',
    name: 'Boi Forte',
    species: 'Angus',
    birthDate: '2019-04-10',
    healthStatus: 'Saudável',
    weight: '550 kg',
    lastConsultation: '2024-02-20',
    location: 'Setor 1',
    marketValue: 'R$ 6.000,00',
  },
  {
    id: '3',
    name: 'Boi Cidadão',
    species: 'Zebu',
    birthDate: '2017-12-15',
    healthStatus: 'Saudável',
    weight: '480 kg',
    lastConsultation: '2024-03-05',
    location: 'Setor 2',
    marketValue: 'R$ 4.800,00',
  },
  {
    id: '4',
    name: 'Boi Esperança',
    species: 'Charolês',
    birthDate: '2020-08-25',
    healthStatus: 'Saudável',
    weight: '600 kg',
    lastConsultation: '2024-04-30',
    location: 'Setor 4',
    marketValue: 'R$ 7.500,00',
  },
  {
    id: '5',
    name: 'Boi Sabedoria',
    species: 'Hereford',
    birthDate: '2018-02-20',
    healthStatus: 'Saudável',
    weight: '520 kg',
    lastConsultation: '2024-05-12',
    location: 'Setor 5',
    marketValue: 'R$ 5.200,00',
  },
  {
    id: '6',
    name: 'Boi Valor',
    species: 'Brahman',
    birthDate: '2019-03-05',
    healthStatus: 'Saudável',
    weight: '540 kg',
    lastConsultation: '2024-06-01',
    location: 'Setor 6',
    marketValue: 'R$ 6.300,00',
  },
  {
    id: '7',
    name: 'Boi Alegria',
    species: 'Ayrshire',
    birthDate: '2021-06-10',
    healthStatus: 'Saudável',
    weight: '470 kg',
    lastConsultation: '2024-07-10',
    location: 'Setor 1',
    marketValue: 'R$ 4.500,00',
  },
  {
    id: '8',
    name: 'Boi Destino',
    species: 'Pantanaleiro',
    birthDate: '2020-05-18',
    healthStatus: 'Saudável',
    weight: '550 kg',
    lastConsultation: '2024-08-15',
    location: 'Setor 3',
    marketValue: 'R$ 6.000,00',
  },
  {
    id: '9',
    name: 'Boi Esperança',
    species: 'Gir',
    birthDate: '2019-11-22',
    healthStatus: 'Saudável',
    weight: '590 kg',
    lastConsultation: '2024-09-05',
    location: 'Setor 2',
    marketValue: 'R$ 7.000,00',
  },
  {
    id: '10',
    name: 'Boi Progresso',
    species: 'Simental',
    birthDate: '2020-07-14',
    healthStatus: 'Saudável',
    weight: '520 kg',
    lastConsultation: '2024-10-11',
    location: 'Setor 4',
    marketValue: 'R$ 5.900,00',
  },
];

const LifeScreen = ({ navigation }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const renderAnimalItem = ({ item }) => {
    const isExpanded = item.id === expandedId;

    return (
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.card}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.animalImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.info}>{item.species}</Text>
            <Text style={[styles.info, item.healthStatus === 'Saudável' ? styles.healthy : styles.unhealthy]}>
              Saúde: {item.healthStatus}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.expandButton} onPress={() => toggleExpand(item.id)}>
          <Ionicons
            name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#B0B0B0"
          />
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedSection}>
            <Text style={styles.info}>Nascimento: {item.birthDate}</Text>
            <Text style={styles.info}>Peso: {item.weight}</Text>
            <Text style={styles.info}>Última Consulta: {item.lastConsultation}</Text>
            <Text style={styles.info}>Localização: {item.location}</Text>
            <Text style={styles.info}>Valor de Mercado: {item.marketValue}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Animais</Text>
      </View>

      <FlatList
        data={animalStock}
        renderItem={renderAnimalItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default LifeScreen;