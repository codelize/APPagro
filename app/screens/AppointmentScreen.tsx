import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FIRESTORE_DB } from '../Firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { collection, getDocs, query } from 'firebase/firestore';
import styles from '../styles/AppointmentScreenStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

interface BovineData {
  id: string;
  name: string;
  details: string;
  amount: number;
}

const AppointmentScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [bovineData, setBovineData] = useState<BovineData[]>([]);
  const [filteredData, setFilteredData] = useState<BovineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<any>>();

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
      setFilteredData(data);
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

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text === '') {
      setFilteredData(bovineData);
    } else {
      const filtered = bovineData.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const renderExpenseItem = ({ item, index }: { item: BovineData; index: number }) => {
    const inputRange = [-1, 0, index * 100, (index + 2) * 100];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.9],
    });
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.6],
    });

    return (
      <Animated.View style={[styles.expenseCard, { transform: [{ scale }], opacity }]}>
        <Ionicons name="medkit-outline" size={28} color="#FFFFFF" style={styles.icon} />
        <View style={styles.infoContainer}>
          <Text style={styles.animalName}>{item.name}</Text>
          <Text style={styles.detailsText}>{item.details}</Text>
        </View>
        <Text style={[styles.amountText, { color: '#FF4500' }]}>
          R$ {item.amount}
        </Text>
        <Ionicons name="alert-circle-outline" size={24} color="#FF4500" style={styles.alertIcon} />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Consultas"
        onBackPress={() => navigation.goBack()}
      />

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
        <Animated.FlatList
          data={filteredData}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default AppointmentScreen;
