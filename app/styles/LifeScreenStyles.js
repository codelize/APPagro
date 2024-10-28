import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
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
    padding: 8,
  },
  headerTitle: {
    color: '#EAEAEA',
    fontSize: 28,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  info: {
    fontSize: 14,
    color: '#A9A9A9',
    marginVertical: 2,
  },
  healthy: {
    color: '#4CAF50',
  },
  unhealthy: {
    color: '#FF5252',
  },
  expandButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    alignSelf: 'flex-end', // Alinha o botão à direita
  },
  expandedSection: {
    marginTop: 8,
    paddingTop: 8,
  },
});

export default styles;
