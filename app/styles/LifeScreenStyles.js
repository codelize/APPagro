import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 8,
  },
  expandedSection: {
    marginTop: 8,
    paddingTop: 8,
  },
  boldText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF4C4C',
    fontSize: 16,
    marginBottom: 10,
  },
  reloadButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reloadText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
