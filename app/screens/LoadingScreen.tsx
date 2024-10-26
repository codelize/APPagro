import React, { useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // Redireciona para a HomeScreen após o loading
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.loadingImageContainer}>
        <Image
          style={styles.circleImg}
          source={require('./../../assets/Circle.png')}
          resizeMode="cover"
        />
        <Image
          style={styles.logoImg}
          source={require('./../../assets/LogoAgroCare.png')}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C331C', // Fundo escuro para consistência com a aplicação
  },
  loadingImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 320,
    height: 100,
    position: 'absolute',
    zIndex: 1,
  },
  circleImg: {
    width: '200%',
    height: '130%',
    position: 'absolute',
    top: 200,
    opacity: 0.25, // Opacidade ajustada para suavizar o efeito de fundo
    zIndex: 0,
    tintColor: '#68D391', // Mantido o verde claro para o círculo
  },
});
