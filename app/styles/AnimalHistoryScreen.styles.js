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
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  primaryInfoContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 8,
  },
  consultDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#68D391',
    marginBottom: 4,
  },
  reasonText: {
    fontSize: 14,
    color: '#FFD700',
    marginBottom: 4,
  },
  secondaryInfoContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A9A9A9',
    marginTop: 4,
  },
  value: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  activeFilterText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  noDataText: {
    fontSize: 16,
    color: '#A9A9A9',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
