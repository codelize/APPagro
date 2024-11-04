import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header'; // Import do Header
import styles from '../styles/RegistrationScreenStyles.js';

export default function RegistrationScreen({ navigation }) {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState(''); 
  const [mostrarSenha, setMostrarSenha] = useState(true); 
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(true); 
  const [isSelected, setSelection] = useState(false); 
  const [errors, setErrors] = useState({}); 

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleCadastro = async () => {
    let errorMessages = {};

    if (!primeiroNome) errorMessages.primeiroNome = 'O nome é obrigatório';
    if (!email) {
      errorMessages.email = 'O email é obrigatório';
    } else if (!validateEmail(email)) {
      errorMessages.email = 'O email é inválido';
    }
    if (!senha) {
      errorMessages.senha = 'A senha é obrigatória';
    } else if (senha.length < 5) {
      errorMessages.senha = 'A senha deve ter pelo menos 5 caracteres';
    }
    if (senha && senha !== confirmarSenha) errorMessages.confirmarSenha = 'As senhas não coincidem';
    if (!confirmarSenha) errorMessages.confirmarSenha = 'A confirmação de senha é obrigatória';

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }

    await AsyncStorage.setItem('userData', JSON.stringify({ primeiroNome, email, senha }));
    navigation.navigate('MainTabs', { screen: 'Agro' });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          {/* Utilizando o Header com título "Criar Conta" e botão de voltar */}
          <Header title="Criar Conta" onBackPress={() => navigation.goBack()} />

          <TextInput
            placeholder="Primeiro Nome"
            placeholderTextColor="#aaa"
            style={[styles.input, errors.primeiroNome ? styles.inputError : null]}
            value={primeiroNome}
            onChangeText={text => {
              setPrimeiroNome(text);
              setErrors({ ...errors, primeiroNome: '' });
            }}
          />
          {errors.primeiroNome ? <Text style={styles.errorText}>{errors.primeiroNome}</Text> : null}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={[styles.input, errors.email ? styles.inputError : null]}
            keyboardType="email-address"
            value={email}
            onChangeText={text => {
              setEmail(text);
              setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#aaa"
              style={[styles.inputPassword, errors.senha ? styles.inputError : null]}
              secureTextEntry={mostrarSenha}
              value={senha}
              onChangeText={text => {
                setSenha(text);
                setErrors({ ...errors, senha: '' });
              }}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.showPasswordButton}>
              <Ionicons name={mostrarSenha ? 'eye-outline' : 'eye-off-outline'} size={20} color="#68D391" />
            </TouchableOpacity>
          </View>
          {errors.senha ? <Text style={styles.errorText}>{errors.senha}</Text> : null}

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirmar Senha"
              placeholderTextColor="#aaa"
              style={[styles.inputPassword, errors.confirmarSenha ? styles.inputError : null]}
              secureTextEntry={mostrarConfirmarSenha}
              value={confirmarSenha}
              onChangeText={text => {
                setConfirmarSenha(text);
                setErrors({ ...errors, confirmarSenha: '' });
              }}
            />
            <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)} style={styles.showPasswordButton}>
              <Ionicons name={mostrarConfirmarSenha ? 'eye-outline' : 'eye-off-outline'} size={20} color="#68D391" />
            </TouchableOpacity>
          </View>
          {errors.confirmarSenha ? <Text style={styles.errorText}>{errors.confirmarSenha}</Text> : null}

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? '#68D391' : undefined}
            />
            <Text style={styles.checkboxLabel}>Aceito receber atualizações e promoções</Text>
          </View>
          
          <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
