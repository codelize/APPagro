import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo!</Text>
      <Text style={styles.subtext}>Você está na tela inicial.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Fundo neutro e suave
    paddingHorizontal: 30,
  },
  welcome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333', // Título escuro
    marginBottom: 20,
  },
  subtext: {
    fontSize: 18,
    color: '#777', // Texto secundário
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50', // Botão verde
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
