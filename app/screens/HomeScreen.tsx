import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem de fundo: circle */}
      <Image
        style={styles.circleImg}
        source={require('./../../assets/Circle.png')} // Caminho ajustado da imagem Circle
        resizeMode="cover"
      />

      {/* Elipse sobreposta */}
      <Image
        style={styles.ellipseImg}
        source={require('./../../assets/Ellipse.png')} // Caminho ajustado da imagem Ellipse
        resizeMode="cover"
      />

      {/* Logo */}
      <Image
        source={require('./../../assets/LogoAgroCare.png')} // Caminho ajustado da imagem LogoAgroCare
        style={styles.smallLogoImg}
      />

      {/* Texto do slogan */}
      <Text style={styles.subtitle}>
        Faça parte da nova{"\n"}geração agropecuarista{"\n"}do Brasil!
      </Text>

      {/* Botões */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')} // Navegação para a tela de Login
      >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão para ir à tela de Cadastro */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Cadastro')} 
      >
        <Text style={styles.btnText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#1A1A1A', // Alterado para fundo escuro consistente com o layout geral do aplicativo
    paddingBottom: 40,
  },
  smallLogoImg: {
    width: 350,
    height: 100,
    marginBottom: 200,
    zIndex: 1, // A logo deve estar acima das imagens
  },
  subtitle: {
    color: '#FFFFFF', // Manter o texto branco
    fontSize: 22,
    fontFamily: 'Courier',
    padding: 10,
    textAlign: 'left',
    marginVertical: 20,
    width: '80%',
    lineHeight: 28,
    zIndex: 1, // O texto também deve estar acima das imagens
  },
  btn: {
    backgroundColor: '#68D391', // Alterado para o verde usado nos botões em outras telas
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 1, // Botões sobre as imagens
  },
  btnText: {
    color: '#FFFFFF', // Texto branco nos botões para manter a consistência
    fontSize: 18,
  },
  circleImg: {
    width: '200%',
    height: '130%',
    position: 'absolute',
    top: 200,
    opacity: 0.25, // Mantendo a opacidade mais baixa para suavizar a imagem de fundo
    zIndex: 0, // Definimos a imagem circle como o fundo
  },
  ellipseImg: {
    width: '150%',
    height: '70%',
    top: 800,
    left: 50,
    transform: [{ rotate: '-2deg' }],
    zIndex: 1,
  },
});
