import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C331C',
  },
  scrollContainer: {
    paddingBottom: 90,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    width: 110,
    height: 35,
    resizeMode: 'contain',
  },
  elliBackground: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    height: 1600,
    resizeMode: 'cover',
    zIndex: 0,
},
menuButton: {
  backgroundColor: 'transparent',
  padding: 8,
  borderRadius: 12,
},
indicatorContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'absolute', // Mantém a posição relativa ao card
  top: 25, // Ajusta para a parte superior
  right: 20,// Ajusta a posição vertical para ficar no topo do último especialista
},
indicatorDot: {
  width: 10, // Altera para o formato achatado
  height: 6,
  borderRadius: 10,
  marginHorizontal: 4,
},
activeDot: {
  backgroundColor: '#68D391',
},
inactiveDot: {
  backgroundColor: '#A8A8A8',
},
carouselList: {
  paddingHorizontal: 10,
},
carouselItem: {
  width: (width * 0.9) / 3 - 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#282828',
  borderRadius: 12,
  padding: 15,
  marginHorizontal: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 3,
},
carouselImage: {
  width: 70,
  height: 70,
  borderRadius: 35,
  marginBottom: 8,
},
carouselTitle: {
  color: '#EAEAEA',
  fontSize: 14,
  textAlign: 'center',
},
carouselCardContainer: {
  backgroundColor: '#333',
  borderRadius: 12,
  padding: 10,
  left: '-02.4%',
  width: '105%', // Ajuste para a largura total da tela
  marginBottom: 20,
  position: 'relative', // Permite que o indicador seja posicionado dentro do card
},
carouselHeader: {
  color: '#EAEAEA',
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 10,
  marginLeft: 100,
},
statsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#333',
  borderRadius: 12,
  paddingVertical: 20,
  paddingHorizontal: 10,
  marginVertical: 20,
  width: '90%',
  alignSelf: 'center',
  position: 'relative',
  zIndex: 1,
},
avatarContainer: {
  position: 'absolute',
  top: -5,
  left: '37%',
  zIndex: 1,
},
avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  borderColor: '#68D391',
  borderWidth: 3,
  zIndex: 1,
},
statCard: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 5,
  zIndex: 1,
},
leftCard: {
  alignItems: 'flex-start',
  marginLeft: 20,
  zIndex: 1,
},
rightCard: {
  alignItems: 'flex-end',
  marginRight: 20,
  zIndex: 1,
},
statContainer: {
  alignItems: 'center',
},
statNumber: {
  color: '#EAEAEA',
  fontSize: 24,
  fontWeight: '600',
},
statLabel: {
  color: '#A8A8A8',
  fontSize: 14,
  marginTop: 5,
},
userInfoContainer: {
  alignItems: 'center',
  marginBottom: 10,
},
userName: {
  color: '#EAEAEA',
  fontSize: 20,
  fontWeight: '600',
  marginBottom: 5,
},
userLocation: {
  color: '#A8A8A8',
  fontSize: 14,
},
dashboardContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: -10,
  marginBottom: 20,
  zIndex: 1,
},
leftColumn: {
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
  zIndex: 1,
},
dashboardCard: {
  borderRadius: 12,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 0.1,
  zIndex: 1,
  width: '100%',
  position: 'relative',
},
smallCard: {
  flex: 1,
  zIndex: 1,
  height: 150,
  marginBottom: 11,
},
largeCard: {
  flex: 1,
  zIndex: 1,
  marginLeft: 10,
  height: 310,
},
transparentCard: {
  backgroundColor: 'rgba(51, 51, 51, 0.7)',
},
cardNumber: {
  color: '#68D391',
  fontSize: 24,
  fontWeight: '600',
},
cardLabel: {
  color: '#A8A8A8',
  fontSize: 14,
  marginTop: 5,
},
iconPosition: {
  position: 'absolute',
  top: 10,
  right: 10,
},
coreImageBackground: {
  width: '50%',
  height: '70%',
  resizeMode: 'contain',
  opacity: 0.8,
  position: 'absolute',
  zIndex: -1,
  top: '30%',
  left: '30%',
},
alertsContainer: {
  marginBottom: 10,
  padding: 15,
  left: '-02.4%',
  backgroundColor: '#333',
  borderRadius: 10,
  zIndex: 1,
  width: '105%', // Ajuste para a largura total da tela
},
sectionTitle: {
  color: '#EAEAEA',
  fontSize: 18,
  marginBottom: 10,
},
alertItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 5,
},
alertText: {
  color: '#EAEAEA',
  marginLeft: 10,
},
// Estilos para o modal de expansão de imagem
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  
modalImage: {
    width: 300, // Ajuste o tamanho conforme necessário
    height: 300,
    borderRadius: 100, // Faz a imagem ficar circular
    resizeMode: 'cover',
  },
});
