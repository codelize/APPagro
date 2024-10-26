import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const bovineData = [
  { id: '1', name: 'Boi 101', details: 'Consulta Veterinária - Exame de Sangue', amount: '-R$120' },
  { id: '2', name: 'Boi 202', details: 'Vacinação contra Febre Aftosa', amount: '-R$75' },
  { id: '3', name: 'Boi 303', details: 'Consulta de Rotina - Avaliação Geral', amount: '-R$150' },
  { id: '4', name: 'Boi 404', details: 'Tratamento para Infecção Bacteriana', amount: '-R$200' },
  { id: '5', name: 'Boi 505', details: 'Exame de Ultrassom', amount: '-R$100' },
  { id: '6', name: 'Boi 606', details: 'Consulta de Rotina - Avaliação Geral', amount: '-R$150' },
];

const BovineExpenseReportScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filteredData = bovineData.filter((animal) =>
    animal.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderExpenseItem = ({ item }) => (
    <View style={styles.expenseCard}>
      <Ionicons name="medkit-outline" size={28} color="#FFFFFF" style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.animalName}>{item.name}</Text>
        <Text style={styles.detailsText}>{item.details}</Text>
      </View>
      <Text style={[styles.amountText, { color: '#FF4500' }]}>{item.amount}</Text>
      <Ionicons name="alert-circle-outline" size={24} color="#FF4500" style={styles.alertIcon} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Informes</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar por nome ou ID do bovino"
        placeholderTextColor="#A9A9A9"
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={filteredData}
        renderItem={renderExpenseItem}
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
  searchBar: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  list: {
    paddingBottom: 80,
  },
  expenseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detailsText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertIcon: {
    marginLeft: 10,
  },
});

export default BovineExpenseReportScreen;
