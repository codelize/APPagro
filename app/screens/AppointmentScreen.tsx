import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIRESTORE_DB } from '../Firebase'; // Certifique-se de ter exportado sua instância do Firestore
import { collection, getDocs, query } from 'firebase/firestore';
import styles from '../styles/AppointmentScreenStyles.'; // Import dos estilos separados
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface BovineData {
  id: string;
  name: string;
  details: string;
  amount: number; // Ajuste para number, caso o valor seja numérico no Firebase
}

const AppointmentScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [bovineData, setBovineData] = useState<BovineData[]>([]);
  const [filteredData, setFilteredData] = useState<BovineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<any>>();

  // Função para buscar os dados do Firestore
  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);

    try {
      const appointmentQuery = query(collection(FIRESTORE_DB, 'appointments'));
      const querySnapshot = await getDocs(appointmentQuery);

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as BovineData[];

      setBovineData(data);
      setFilteredData(data); // Define o filtro inicial com todos os dados
    } catch (error) {
      console.error("Erro ao buscar dados do Firestore:", error);
      setError("Não foi possível carregar os dados. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Função para atualizar o filtro conforme o texto de busca
  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text === '') {
      setFilteredData(bovineData); // Se não houver texto, mostrar todos os dados
    } else {
      const filtered = bovineData.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const renderExpenseItem = ({ item }: { item: BovineData }) => (
    <View style={styles.expenseCard}>
      <Ionicons name="medkit-outline" size={28} color="#FFFFFF" style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.animalName}>{item.name}</Text>
        <Text style={styles.detailsText}>{item.details}</Text>
      </View>
      <Text style={[styles.amountText, { color: '#FF4500' }]}>
        R$ {item.amount}
      </Text>
      <Ionicons name="alert-circle-outline" size={24} color="#FF4500" style={styles.alertIcon} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultas</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar por nome ou ID do bovino"
        placeholderTextColor="#A9A9A9"
        value={searchText}
        onChangeText={handleSearch}
      />

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={fetchAppointments} style={styles.reloadButton}>
            <Text style={styles.reloadText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }} // Ocupa o espaço exato do conteúdo
        />
      )}
    </SafeAreaView>
  );
};

export default AppointmentScreen;
