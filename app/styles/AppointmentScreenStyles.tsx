import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  searchBar: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  list: {
    paddingBottom: 80,
  },
  expenseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detailsText: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertIcon: {
    marginLeft: 10,
  },
});

export default styles;
