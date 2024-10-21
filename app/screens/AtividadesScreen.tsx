import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AtividadesScreen: React.FC = () => {
  const [score, setScore] = useState<number>(0);

  // Função para incrementar os pontos
  const handleClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Joguinho de Clique!</Text>
      <Text style={styles.score}>Pontos: {score}</Text>

      <Button title="Clique para ganhar pontos" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#68D391',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
});

export default AtividadesScreen;
