import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

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
  {
    id: '11',
    nome: 'Boi Forte',
    especie: 'Holandês',
    dataNascimento: '17 de Junho de 2021',
    estadoDeSaude: 'Saudável',
    peso: '450 kg',
    ultimaConsulta: '25 de Dezembro de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 4.600,00'
  },
  {
    id: '12',
    nome: 'Boi Vigoroso',
    especie: 'Jersey',
    dataNascimento: '20 de Maio de 2019',
    estadoDeSaude: 'Saudável',
    peso: '500 kg',
    ultimaConsulta: '05 de Janeiro de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 5.000,00'
  },
  {
    id: '13',
    nome: 'Boi Calmo',
    especie: 'Marchigiana',
    dataNascimento: '09 de Outubro de 2020',
    estadoDeSaude: 'Atenção',
    peso: '470 kg',
    ultimaConsulta: '10 de Fevereiro de 2024',
    localizacao: 'Setor 2',
    valorDeMercado: 'R$ 4.750,00'
  },
  {
    id: '14',
    nome: 'Boi Serene',
    especie: 'Nelore',
    dataNascimento: '08 de Julho de 2018',
    estadoDeSaude: 'Recuperação',
    peso: '515 kg',
    ultimaConsulta: '20 de Março de 2024',
    localizacao: 'Setor 6',
    valorDeMercado: 'R$ 5.300,00'
  },
  {
    id: '15',
    nome: 'Boi Bravo',
    especie: 'Pardo-Suíço',
    dataNascimento: '15 de Janeiro de 2021',
    estadoDeSaude: 'Saudável',
    peso: '495 kg',
    ultimaConsulta: '25 de Abril de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.100,00'
  },
  {    id: '16',
    nome: 'Boi Forte',
    especie: 'Limousin',
    dataNascimento: '04 de Março de 2019',
    estadoDeSaude: 'Saudável',
    peso: '480 kg',
    ultimaConsulta: '10 de Maio de 2024',
    localizacao: 'Setor 1',
    valorDeMercado: 'R$ 5.000,00'
  },
  {
    id: '17',
    nome: 'Boi Imponente',
    especie: 'Nelore',
    dataNascimento: '12 de Julho de 2017',
    estadoDeSaude: 'Atenção',
    peso: '510 kg',
    ultimaConsulta: '22 de Junho de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 5.300,00'
  },
  {
    id: '18',
    nome: 'Boi Bravo',
    especie: 'Angus',
    dataNascimento: '28 de Setembro de 2018',
    estadoDeSaude: 'Saudável',
    peso: '520 kg',
    ultimaConsulta: '15 de Julho de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 5.500,00'
  },
  {
    id: '19',
    nome: 'Boi Rústico',
    especie: 'Hereford',
    dataNascimento: '30 de Agosto de 2016',
    estadoDeSaude: 'Recuperação',
    peso: '530 kg',
    ultimaConsulta: '01 de Agosto de 2024',
    localizacao: 'Setor 2',
    valorDeMercado: 'R$ 5.800,00'
  },
  {
    id: '20',
    nome: 'Boi Sereno',
    especie: 'Gir',
    dataNascimento: '05 de Novembro de 2020',
    estadoDeSaude: 'Saudável',
    peso: '470 kg',
    ultimaConsulta: '15 de Setembro de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.200,00'
  },
  {
    id: '21',
    nome: 'Boi Ágil',
    especie: 'Brahman',
    dataNascimento: '10 de Abril de 2019',
    estadoDeSaude: 'Atenção',
    peso: '480 kg',
    ultimaConsulta: '18 de Setembro de 2024',
    localizacao: 'Setor 1',
    valorDeMercado: 'R$ 5.100,00'
  },
  {
    id: '22',
    nome: 'Boi Vigoroso',
    especie: 'Caracu',
    dataNascimento: '12 de Junho de 2018',
    estadoDeSaude: 'Saudável',
    peso: '490 kg',
    ultimaConsulta: '22 de Outubro de 2024',
    localizacao: 'Setor 6',
    valorDeMercado: 'R$ 5.250,00'
  },
  {
    id: '23',
    nome: 'Boi Macho',
    especie: 'Simental',
    dataNascimento: '19 de Fevereiro de 2017',
    estadoDeSaude: 'Atenção',
    peso: '560 kg',
    ultimaConsulta: '05 de Novembro de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 5.850,00'
  },
  {
    id: '24',
    nome: 'Boi Robustez',
    especie: 'Devon',
    dataNascimento: '08 de Julho de 2016',
    estadoDeSaude: 'Recuperação',
    peso: '540 kg',
    ultimaConsulta: '15 de Novembro de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.750,00'
  },
  {
    id: '25',
    nome: 'Boi Forte',
    especie: 'Jersey',
    dataNascimento: '25 de Maio de 2021',
    estadoDeSaude: 'Saudável',
    peso: '450 kg',
    ultimaConsulta: '22 de Novembro de 2024',
    localizacao: 'Setor 1',
    valorDeMercado: 'R$ 4.900,00'
  },
  {
    id: '26',
    nome: 'Boi Serenidade',
    especie: 'Limousin',
    dataNascimento: '09 de Dezembro de 2020',
    estadoDeSaude: 'Atenção',
    peso: '500 kg',
    ultimaConsulta: '10 de Dezembro de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 5.000,00'
  },
  {
    id: '27',
    nome: 'Boi Destemido',
    especie: 'Nelore',
    dataNascimento: '18 de Setembro de 2019',
    estadoDeSaude: 'Saudável',
    peso: '500 kg',
    ultimaConsulta: '18 de Janeiro de 2024',
    localizacao: 'Setor 2',
    valorDeMercado: 'R$ 5.200,00'
  },
  {
    id: '28',
    nome: 'Boi Imponente',
    especie: 'Pardo-Suíço',
    dataNascimento: '11 de Janeiro de 2020',
    estadoDeSaude: 'Recuperação',
    peso: '490 kg',
    ultimaConsulta: '25 de Janeiro de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 5.150,00'
  },
  {
    id: '29',
    nome: 'Boi Guerreiro',
    especie: 'Angus',
    dataNascimento: '04 de Agosto de 2018',
    estadoDeSaude: 'Atenção',
    peso: '510 kg',
    ultimaConsulta: '02 de Fevereiro de 2024',
    localizacao: 'Setor 6',
    valorDeMercado: 'R$ 5.300,00'
  },
  {
    id: '30',
    nome: 'Boi Bravo',
    especie: 'Hereford',
    dataNascimento: '15 de Março de 2017',
    estadoDeSaude: 'Saudável',
    peso: '520 kg',
    ultimaConsulta: '20 de Fevereiro de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.500,00'
  },
  {
    id: '31',
    nome: 'Boi Calmo',
    especie: 'Gir',
    dataNascimento: '12 de Dezembro de 2019',
    estadoDeSaude: 'Recuperação',
    peso: '470 kg',
    ultimaConsulta: '15 de Março de 2024',
    localizacao: 'Setor 1',
    valorDeMercado: 'R$ 4.800,00'
  },
  {
    id: '32',
    nome: 'Boi Ágil',
    especie: 'Brahman',
    dataNascimento: '07 de Julho de 2021',
    estadoDeSaude: 'Saudável',
    peso: '450 kg',
    ultimaConsulta: '30 de Março de 2024',
    localizacao: 'Setor 2',
    valorDeMercado: 'R$ 4.600,00'
  },
  {
    id: '33',
    nome: 'Boi Bravo',
    especie: 'Simental',
    dataNascimento: '20 de Janeiro de 2018',
    estadoDeSaude: 'Atenção',
    peso: '540 kg',
    ultimaConsulta: '05 de Abril de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 5.700,00'
  },
  {
    id: '34',
    nome: 'Boi Veloz',
    especie: 'Charolês',
    dataNascimento: '18 de Maio de 2016',
    estadoDeSaude: 'Saudável',
    peso: '550 kg',
    ultimaConsulta: '15 de Abril de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 5.800,00'
  },
  {
    id: '35',
    nome: 'Boi Robusto',
    especie: 'Guzerá',
    dataNascimento: '29 de Outubro de 2019',
    estadoDeSaude: 'Recuperação',
    peso: '500 kg',
    ultimaConsulta: '20 de Maio de 2024',
    localizacao: 'Setor 6',
    valorDeMercado: 'R$ 5.200,00'
  },
  {
    id: '36',
    nome: 'Boi Forte',
    especie: 'Holandês',
    dataNascimento: '03 de Julho de 2020',
    estadoDeSaude: 'Saudável',
    peso: '470 kg',
    ultimaConsulta: '25 de Maio de 2024',
    localizacao: 'Setor 1',
    valorDeMercado: 'R$ 5.000,00'
  },
  {
    id: '37',
    nome: 'Boi Ágil',
    especie: 'Devon',
    dataNascimento: '14 de Março de 2019',
    estadoDeSaude: 'Atenção',
    peso: '460 kg',
    ultimaConsulta: '02 de Junho de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 4.850,00'
  },
  {
    id: '38',
    nome: 'Boi Macho',
    especie: 'Angus',
    dataNascimento: '10 de Dezembro de 2018',
    estadoDeSaude: 'Saudável',
    peso: '540 kg',
    ultimaConsulta: '10 de Junho de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.600,00'
  },
  {
    id: '39',
    nome: 'Boi Sereno',
    especie: 'Caracu',
    dataNascimento: '02 de Janeiro de 2017',
    estadoDeSaude: 'Recuperação',
    peso: '510 kg',
    ultimaConsulta: '20 de Julho de 2024',
    localizacao: 'Setor 2',
    valorDeMercado: 'R$ 5.300,00'
  },
  {
    id: '40',
    nome: 'Boi Rústico',
    especie: 'Gir',
    dataNascimento: '25 de Fevereiro de 2021',
    estadoDeSaude: 'Saudável',
    peso: '450 kg',
    ultimaConsulta: '30 de Julho de 2024',
    localizacao: 'Setor 3',
    valorDeMercado: 'R$ 4.500,00'
  },
  {
    id: '41',
    nome: 'Boi Calmo',
    especie: 'Marchigiana',
    dataNascimento: '11 de Novembro de 2020',
    estadoDeSaude: 'Atenção',
    peso: '460 kg',
    ultimaConsulta: '05 de Agosto de 2024',
    localizacao: 'Setor 4',
    valorDeMercado: 'R$ 4.750,00'
  },
  {
    id: '42',
    nome: 'Boi Imponente',
    especie: 'Simental',
    dataNascimento: '13 de Junho de 2019',
    estadoDeSaude: 'Saudável',
    peso: '480 kg',
    ultimaConsulta: '12 de Setembro de 2024',
    localizacao: 'Setor 5',
    valorDeMercado: 'R$ 5.200,00'
  }
  // Adicione mais objetos conforme necessário
];

const AnimalStockScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
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
    padding: 8,
  },
  headerTitle: {
    color: '#EAEAEA',
    fontSize: 28,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  info: {
    fontSize: 14,
    color: '#A9A9A9',
    marginVertical: 2,
  },
  healthy: {
    color: '#4CAF50',
  },
  unhealthy: {
    color: '#FF5252',
  },
  expandButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    alignSelf: 'flex-end', // Alinha o botão à direita
  },
  expandedSection: {
    marginTop: 8,
    paddingTop: 8,
  },
});

export default AnimalStockScreen;
