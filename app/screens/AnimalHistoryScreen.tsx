import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AnimalHistoryScreenStyles as styles } from '../styles/AnimalHistoryScreen.styles';

type AnimalHistoryRouteParams = {
  AnimalHistory: {
    animalId: string;
  };
};

const AnimalHistoryScreen = () => {
  const route = useRoute<RouteProp<AnimalHistoryRouteParams, 'AnimalHistory'>>();
  const { animalId } = route.params;
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Simulação de dados de histórico; substitua pela sua lógica de busca real
    const fetchHistory = async () => {
      try {
        const data = [
          { date: '2024-10-01', status: 'Saudável', notes: 'Animal em ótimo estado.' },
          { date: '2024-09-20', status: 'Febre leve', notes: 'Recebeu tratamento e se recuperou.' },
          // Outros registros...
        ];
        setHistoryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, [animalId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico do Animal</Text>
      {historyData.map((entry, index) => (
        <View key={index} style={styles.historyCard}>
          <Text>Data: {entry.date}</Text>
          <Text>Status: {entry.status}</Text>
          <Text>Observações: {entry.notes}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default AnimalHistoryScreen;
