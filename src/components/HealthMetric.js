import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HealthMetric = ({ title, value, unit, icon }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color="#1cc910" />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.unit}>{unit}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 12,
    width: '30%',
  },
  value: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  unit: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
}); 