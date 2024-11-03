import React, { useEffect, useState, FC } from 'react';
import { View, Text, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIRESTORE_DB } from '../Firebase';
import Header from '../components/Header';
import styles from '../styles/AnimalHistoryScreen.styles';

type AnimalHistoryRouteParams = {
  AnimalHistory: {
    animalId: number;
  };
};

type HistoryEntry = {
  previousConsult: string;
  consultDate: any; // Permite que o campo seja um Timestamp ou uma string
  identification: string;
  reason: string;
  result: string;
  treatment: string;
  vetResponsible: string;
};

const formatDate = (date: any): string => {
  if (date instanceof Date) {
    return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  } else if (date?.toDate) { // Verifica se é um Timestamp do Firestore
    return date.toDate().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return 'Data Inválida';
};

const HistoryCard: FC<{ entry: HistoryEntry }> = ({ entry }) => (
  <View style={styles.historyCard}>
    <Text style={styles.dateText}>Data da Consulta: {formatDate(entry.consultDate)}</Text>
    <Text style={styles.statusText}>Motivo da Consulta: {entry.reason}</Text>
    <Text style={styles.notesText}>Resultado do Tratamento: {entry.result}</Text>
    <Text style={styles.notesText}>Tratamento Aplicado: {entry.treatment}</Text>
    <Text style={styles.notesText}>Veterinário Responsável: {entry.vetResponsible}</Text>
  </View>
);

const AnimalHistoryScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const { params } = useRoute<RouteProp<AnimalHistoryRouteParams, 'AnimalHistory'>>();
  const { animalId } = params;
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        console.log(`Buscando histórico para o animalId: ${animalId}`);

        const historyQuery = query(
          collection(FIRESTORE_DB, 'history'),
          where('animalId', '==', animalId) // Certifique-se de que o animalId seja um número
        );
        const querySnapshot = await getDocs(historyQuery);

        if (querySnapshot.empty) {
          console.log('Nenhum histórico encontrado para este animal.');
          setHistoryData([]);
        } else {
          const history = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              previousConsult: data['Consulta Anterior'] || '',
              consultDate: data['Data da Consulta'] || '',
              identification: data['Identificação'] || '',
              reason: data['Motivo da Consulta'] || '',
              result: data['Resultado do Tratamento'] || '',
              treatment: data['Tratamento Aplicado'] || '',
              vetResponsible: data['Veterinário Responsável'] || '',
            };
          });

          console.log('Histórico encontrado:', history);
          setHistoryData(history);
        }
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
