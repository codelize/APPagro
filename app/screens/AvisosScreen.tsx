import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AvisosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Avisos</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Aviso 1: Verificar estoque de vacinas.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Aviso 2: Animais em observação.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Aviso 3: Marcar consultas veterinárias.</Text>
      </View>
      {/* Adicione mais avisos conforme necessário */}
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
