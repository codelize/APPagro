import React from 'react';
import { View, Text } from 'react-native';
import BackButton from './BackButton';

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton onPress={onBackPress} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '400',
    marginLeft: -40
  },
};

export default Header;
