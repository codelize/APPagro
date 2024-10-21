// src/components/Alerts.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Alert {
  icon: string;
  color: string;
  message: string;
}

interface AlertsProps {
  alerts: Alert[];
}

const Alerts: React.FC<AlertsProps> = ({ alerts }) => {
  return (
    <View style={styles.alertsContainer}>
      <Text style={styles.sectionTitle}>Alertas Recentes</Text>
      {alerts.map((alert, index) => (
        <View key={index} style={styles.alertItem}>
          <Ionicons name={alert.icon} size={20} color={alert.color} />
          <Text style={styles.alertText}>{alert.message}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  alertsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 10,
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
});

export default Alerts;
