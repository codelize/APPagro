import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const bovineData = [
  { id: '1', name: 'Boi 789', details: 'Exame de Sangue - Check-up Anual', amount: '-R$120' },
  { id: '2', name: 'Boi 230', details: 'Vacinação contra Febre Aftosa', amount: '-R$75' },
  { id: '3', name: 'Boi 345', details: 'Consulta de Rotina - Avaliação de Saúde', amount: '-R$150' },
  { id: '4', name: 'Boi 123', details: 'Tratamento para Infecção Bacteriana', amount: '-R$200' },
  { id: '5', name: 'Boi 678', details: 'Ultrassonografia para Diagnóstico Reprodutivo', amount: '-R$100' },
  { id: '6', name: 'Boi 456', details: 'Exame Fecal para Verminoses', amount: '-R$80' },
  { id: '7', name: 'Boi 321', details: 'Remoção de Carrapatos e Aplicação de Antiparasitário', amount: '-R$60' },
  { id: '8', name: 'Boi 654', details: 'Aplicação de Antibiótico para Infecção Respiratória', amount: '-R$150' },
  { id: '9', name: 'Boi 876', details: 'Consulta para Avaliação Nutricional', amount: '-R$90' },
  { id: '10', name: 'Boi 432', details: 'Tratamento para Dermatite Digital', amount: '-R$75' },
  { id: '11', name: 'Boi 234', details: 'Vacinação contra Brucelose', amount: '-R$85' },
  { id: '12', name: 'Boi 567', details: 'Tratamento de Casco - Controle de Laminite', amount: '-R$110' },
  { id: '13', name: 'Boi 987', details: 'Consulta de Rotina - Avaliação Geral', amount: '-R$150' },
  { id: '14', name: 'Boi 876', details: 'Suplementação com Vitamina A e D', amount: '-R$50' },
  { id: '15', name: 'Boi 123', details: 'Tratamento para Abscesso no Casco', amount: '-R$75' },
  { id: '16', name: 'Boi 675', details: 'Vacinação contra Raiva', amount: '-R$90' },
  { id: '17', name: 'Boi 432', details: 'Consulta para Controle de Peso e Condição Corporal', amount: '-R$130' },
  { id: '18', name: 'Boi 890', details: 'Ultrassonografia - Diagnóstico de Gestação', amount: '-R$140' },
  { id: '19', name: 'Boi 765', details: 'Exame Completo - Controle de Febre Aftosa', amount: '-R$150' },
  { id: '20', name: 'Boi 543', details: 'Consulta para Diagnóstico de Pneumonia', amount: '-R$120' },
  { id: '21', name: 'Boi 999', details: 'Vacinação contra Clostridiose', amount: '-R$95' },
  { id: '22', name: 'Boi 210', details: 'Tratamento para Miíase Cutânea', amount: '-R$70' },
  { id: '23', name: 'Boi 333', details: 'Exame de Tricomonose e Campilobacteriose', amount: '-R$150' },
  { id: '24', name: 'Boi 123', details: 'Avaliação Oftalmológica - Controle de Fotossensibilização', amount: '-R$60' },
  { id: '25', name: 'Boi 654', details: 'Vacinação contra Tuberculose', amount: '-R$100' },
  { id: '26', name: 'Boi 432', details: 'Exame Urinário - Detecção de Proteinúria', amount: '-R$80' },
  { id: '27', name: 'Boi 876', details: 'Tratamento para Infecção de Pele por Fungos', amount: '-R$110' },
  { id: '28', name: 'Boi 210', details: 'Consulta Preventiva - Vermifugação', amount: '-R$140' },
  { id: '29', name: 'Boi 543', details: 'Vacinação contra Leptospirose', amount: '-R$90' },
  { id: '30', name: 'Boi 777', details: 'Consulta para Controle Reprodutivo', amount: '-R$145' },
  { id: '31', name: 'Boi 432', details: 'Exame Clínico - Controle de Mastite', amount: '-R$200' },
  { id: '32', name: 'Boi 210', details: 'Vacinação contra Pasteurelose', amount: '-R$70' },
  { id: '33', name: 'Boi 654', details: 'Consulta para Controle de Ganho de Peso', amount: '-R$80' },
  { id: '34', name: 'Boi 888', details: 'Tratamento de Dermatofitose', amount: '-R$130' },
  { id: '35', name: 'Boi 555', details: 'Consulta de Rotina - Verificação de Sinais Vitais', amount: '-R$150' },
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
