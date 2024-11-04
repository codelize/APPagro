import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C331C',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    width: '90%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginBottom: 25, // Aumentado para criar mais espaço entre os campos
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
    backgroundColor: '#333',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginBottom: 25, // Aumentado para mais espaçamento entre os campos de senha
  },
  inputError: {
    borderBottomColor: '#FF6B6B', // Linha inferior em vermelho para erro
  },
  showPasswordButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: -20, // Pequeno ajuste para posicionar erro junto ao campo
    marginBottom: 5, // Pequeno ajuste para separar o erro do próximo campo
  },
  btn: {
    backgroundColor: '#68D391',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 20, // Espaçamento adicional acima e abaixo do botão
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
    marginTop: 25, // Espaço maior entre o checkbox e o último campo de senha
    alignItems: 'center',
    width: '80%',
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
