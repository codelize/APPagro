import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  historyCard: {
    flexDirection: 'column',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 16,
    color: '#A9A9A9',
    marginVertical: 4,
  },
  notesText: {
    fontSize: 14,
    color: '#A9A9A9',
    marginTop: 4,
  },
  loader: {
    marginVertical: 20,
  },
  noDataText: {
    fontSize: 16,
    color: '#A9A9A9',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
