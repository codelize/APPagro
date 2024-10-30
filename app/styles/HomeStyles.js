import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C331C',
  },
  scrollContainer: {
    // Remover o paddingBottom excessivo
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10, // Reduzido para minimizar o espaço
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
    position: 'absolute',
    top: 25,
    right: 20,
  },
  indicatorDot: {
    width: 10,
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
    width: '105%',
    marginBottom: 20,
    position: 'relative',
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
    zIndex: 0,
  },
  avatarContainer: {
    position: 'absolute',
    top:-5,
    left: '35%',
    zIndex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 35,
    borderColor: '#68D391',
    borderWidth: 3,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: '#333',
  },
  leftCard: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  rightCard: {
    alignItems: 'flex-end',
    marginRight: 20,
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
  },
  leftColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  dashboardCard: {
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.1,
    backgroundColor: '#333',
  },
  smallCard: {
    flex: 1,
    height: 150,
    marginBottom: 10,
  },
  largeCard: {
    flex: 1,
    marginLeft: 10,
    height: 310,
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
    width: '105%',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    resizeMode: 'cover',
  },
});
