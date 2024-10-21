// src/components/Card.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CardProps {
  number: string;
  label: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ number, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardNumber}>{number}</Text>
      <Text style={styles.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cardNumber: {
    color: '#EAEAEA',
    fontSize: 24,
    fontWeight: '600',
  },
  cardLabel: {
    color: '#A8A8A8',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Card;
