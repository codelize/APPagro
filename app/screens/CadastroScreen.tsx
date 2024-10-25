import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import CheckBox from 'expo-checkbox'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
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

    // Armazena os dados de usuário no AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify({ primeiroNome, email, senha }));
    
    // Redireciona para a tela "Agro" (ou outra tela conforme o fluxo de navegação)
    navigation.navigate('MainTabs', { screen: 'Agro' });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>

          {/* Botão de voltar */}
          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>Criar Conta</Text>

          {/* Campo Nome */}
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

          {/* Campo Email */}
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

          {/* Campo Senha */}
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

          {/* Campo Confirmar Senha */}
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

          {/* Checkbox para atualizações */}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? '#68D391' : undefined}
            />
            <Text style={styles.checkboxLabel}>Aceito receber atualizações e promoções</Text>
          </View>
          
          {/* Botão de cadastro */}
          <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastrar-se</Text>
          </TouchableOpacity>
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
    backgroundColor: '#0C331C', // Fundo escuro consistente
    paddingBottom: 40,
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
    backgroundColor: '#333', // Fundo mais escuro para os inputs
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    width: '90%',
    height: 50,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
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
    marginLeft: '10%',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#68D391', // Cor verde para o botão de cadastro
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    width: '80%', 
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
});
