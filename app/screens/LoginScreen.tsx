import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../Firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginScreenStyles.js';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

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
        routes: [{ name: 'HomeTabs' }],
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
          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>Login</Text>

          <TextInput
            style={[styles.input, errors.email ? styles.inputError : null]}
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

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

          {errors.general ? <Text style={styles.errorText}>{errors.general}</Text> : null}

          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Esqueci minha senha', 'Funcionalidade em desenvolvimento')}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View style={styles.horizontalLine} />

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
