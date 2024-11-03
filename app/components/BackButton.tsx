// BackButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    padding: 10, // Ajusta a área de toque
    zIndex: 10,
    
  },
};

export default BackButton;
