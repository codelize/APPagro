import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ConsultasScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consultas</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Consulta 1: Revisão geral do rebanho - 21/10/2024</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Consulta 2: Vacinação de rotina - 15/11/2024</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Consulta 3: Avaliação de febre aftosa - 01/12/2024</Text>
      </View>
      {/* Adicione mais consultas conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1A1A1A',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
  },
});
