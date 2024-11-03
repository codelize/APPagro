import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent', // Alterado para fundo transparente
    paddingVertical: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 25,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '400', // Regular weight para corresponder ao visual
  },
};

export default Header;
