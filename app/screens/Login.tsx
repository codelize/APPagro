import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Keyboard, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from './../Firebase'; // Certifique-se que o caminho está correto
import { useNavigation } from '@react-navigation/native'; // Para redirecionar o usuário

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation(); // Hook de navegação

  const handleLogin = async () => {
    let errorMessages = {};

    if (!email) {
      errorMessages.email = 'O campo e-mail é obrigatório.';
    }

    if (!password) {
      errorMessages.password = 'O campo senha é obrigatório.';
    }

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }

    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }], // Redireciona para a tela Home
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro de login', 'Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>Login</Text>

          {/* Campo de E-mail */}
          <TextInput
            style={[styles.input, errors.email ? styles.inputError : null]}
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          {/* Campo de Senha */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.inputPassword, errors.password ? styles.inputError : null]}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.showPasswordButton} onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#68D391" />
            </TouchableOpacity>
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          {/* Erro geral de autenticação */}
          {errors.general ? <Text style={styles.errorText}>{errors.general}</Text> : null}

          {/* Botão de Login */}
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          {/* Esqueci a senha */}
          <TouchableOpacity onPress={() => Alert.alert('Esqueci minha senha', 'Funcionalidade em desenvolvimento')}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {/* Linha horizontal */}
          <View style={styles.horizontalLine} />

          {/* Link para cadastro */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.signupLink}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C331C', // Fundo escuro para consistência
    paddingHorizontal: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333', // Fundo mais escuro para os campos de input
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    fontSize: 16,
    color: '#fff', // Cor do texto nos inputs
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#333', // Fundo mais escuro para os campos de senha
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff', // Cor do texto nos campos de senha
  },
  showPasswordButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  showPasswordText: {
    color: '#68D391', // Verde do tema para o botão de mostrar/ocultar senha
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#68D391', // Cor verde para o botão de login
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#8FD3A7',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 30,
    opacity: 0.9,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
  },
  signupLink: {
    color: '#8FD3A7',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});
