import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    zIndex: 2,
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  headerTitle: {
    color: '#EAEAEA',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#8FD3A7',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    zIndex: 2,
  },
  veterinarioCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 10,
    width: width * 0.9,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
    height: '70%',
    marginTop: 170,
  },
  veterinarioFoto: {
    width: '100%',
    height: '50%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  veterinarioNome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  veterinarioEspecialidade: {
    color: '#A8A8A8',
    fontSize: 16,
    marginVertical: 4,
  },
  veterinarioDetalhes: {
    color: '#A8A8A8',
    fontSize: 16,
    marginTop: 5,
  },
  experienciaText: {
    color: '#B8B8B8',
    fontSize: 14,
    marginTop: 8,
  },
  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  avaliacaoText: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 5,
  },
  favoritoIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  noMoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68D391',
    padding: 15,
    borderRadius: 25,
  },
  refreshText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  redoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    marginRight: 10,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68D391',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
    marginRight: 10,
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});
