import React, { useEffect, useState, FC } from 'react';
import { View, Text, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import styles from '../styles/AnimalHistoryScreen.styles';

type AnimalHistoryRouteParams = {
  AnimalHistory: {
    animalId: string;
  };
};

type HistoryEntry = {
  date: string;
  status: string;
  notes: string;
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
};

const HistoryCard: FC<{ entry: HistoryEntry }> = ({ entry }) => (
  <View style={styles.historyCard}>
    <Text style={styles.dateText}>Data: {formatDate(entry.date)}</Text>
    <Text style={styles.statusText}>Status: {entry.status}</Text>
    <Text style={styles.notesText}>Observações: {entry.notes}</Text>
  </View>
);

const AnimalHistoryScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const { params } = useRoute<RouteProp<AnimalHistoryRouteParams, 'AnimalHistory'>>();
  const { animalId } = params;
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data: HistoryEntry[] = [
          { date: '2024-10-01', status: 'Saudável', notes: 'Animal em ótimo estado.' },
          { date: '2024-09-20', status: 'Febre leve', notes: 'Recebeu tratamento e se recuperou.' },
        ];
        setHistoryData(data);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [animalId]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Histórico do Animal"
        icon="arrow-back"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
        ) : historyData.length > 0 ? (
          historyData.map((entry, index) => <HistoryCard key={index} entry={entry} />)
        ) : (
          <Text style={styles.noDataText}>Não há histórico disponível para este animal.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimalHistoryScreen;
