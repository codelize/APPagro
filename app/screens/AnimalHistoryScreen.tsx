import React, { useEffect, useState, FC } from 'react';
import { View, Text, ScrollView, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FIRESTORE_DB } from '../Firebase';
import Header from '../components/Header';
import styles from '../styles/AnimalHistoryScreen.styles';

type AnimalHistoryRouteParams = {
  AnimalHistory: {
    animalId: number;y
  };
};

type HistoryEntry = {
  previousConsult: string;
  consultDate: any;
  identification: string;
  reason: string;
  result: string;
  treatment: string;
  vetResponsible: string;
};

const formatDate = (date: any): string => {
  if (date instanceof Date) {
    return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  } else if (date?.toDate) {
    return date.toDate().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return 'Data Inválida';
};

const HistoryCard: FC<{ entry: HistoryEntry }> = ({ entry }) => (
  <View style={styles.historyCard}>
    <View style={styles.primaryInfoContainer}>
      <Text style={styles.consultDate}>Consulta em: {formatDate(entry.consultDate)}</Text>
      <Text style={styles.reasonText}>Motivo: {entry.reason}</Text>
    </View>
    <View style={styles.secondaryInfoContainer}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.value}>{entry.result}</Text>
      <Text style={styles.label}>Tratamento Aplicado:</Text>
      <Text style={styles.value}>{entry.treatment}</Text>
      <Text style={styles.label}>Veterinário:</Text>
      <Text style={styles.value}>{entry.vetResponsible}</Text>
    </View>
  </View>
);

const AnimalHistoryScreen: FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<AnimalHistoryRouteParams, 'AnimalHistory'>>();
  const { animalId } = params;
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);
  const [filteredData, setFilteredData] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const historyQuery = query(
          collection(FIRESTORE_DB, 'history'),
          where('animalId', '==', animalId)
        );
        const querySnapshot = await getDocs(historyQuery);
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
        setHistoryData(history);
        setFilteredData(history); 
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [animalId]);

  const applyFilter = (filterOption: string | null) => {
    setFilter(filterOption);
    if (filterOption) {
      setFilteredData(historyData.filter(entry => entry.result.includes(filterOption)));
    } else {
      setFilteredData(historyData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Histórico do Animal" onBackPress={() => navigation.goBack()} />

      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => applyFilter(null)} style={styles.filterButton}>
          <Text style={filter === null ? styles.activeFilterText : styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('Observação')} style={styles.filterButton}>
          <Text style={filter === 'Observação' ? styles.activeFilterText : styles.filterText}>Observação</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('Crítico')} style={styles.filterButton}>
          <Text style={filter === 'Crítico' ? styles.activeFilterText : styles.filterText}>Crítico</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
        ) : filteredData.length > 0 ? (
          filteredData.map((entry, index) => <HistoryCard key={index} entry={entry} />)
        ) : (
          <Text style={styles.noDataText}>Não há histórico disponível para este animal.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimalHistoryScreen;
