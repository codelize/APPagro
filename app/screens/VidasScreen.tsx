import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function VidasScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vidas</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Vida 1: Animal A - Condição saudável</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Vida 2: Animal B - Condição: Febre aftosa em tratamento</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Vida 3: Animal C - Condição: Aguardando consulta</Text>
      </View>
      {/* Adicione mais informações de vidas conforme necessário */}
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
