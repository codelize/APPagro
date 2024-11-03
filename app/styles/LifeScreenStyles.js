import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
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
  historyButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#68D391',
    borderRadius: 5,
    alignItems: 'center',
  },
  historyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
