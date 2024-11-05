import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        {/* Imagem de fundo: circle */}
        <Image
          style={styles.circleImg}
          source={require('./../../assets/Circle.png')}
          resizeMode="cover"
        />

        {/* Elipse sobreposta */}
        <Image
          style={styles.ellipseImg}
          source={require('./../../assets/Ellipse.png')}
          resizeMode="cover"
        />

        {/* Logo */}
        <Image
          source={require('./../../assets/LogoAgroCare.png')}
          style={styles.smallLogoImg}
        />

        {/* Texto do slogan */}
        <Text style={styles.subtitle}>
          Faça parte da nova{"\n"}geração agropecuarista{"\n"}do Brasil!
        </Text>

        {/* Botões */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.btnText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
