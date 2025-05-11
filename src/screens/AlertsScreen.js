import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AlertItem = ({ title, description, enabled, onToggle }) => (
  <View style={styles.alertItem}>
    <View style={styles.alertInfo}>
      <Text style={styles.alertTitle}>{title}</Text>
      <Text style={styles.alertDescription}>{description}</Text>
    </View>
    <Switch
      value={enabled}
      onValueChange={onToggle}
      trackColor={{ false: '#767577', true: '#1cc910' }}
      thumbColor={enabled ? '#fff' : '#f4f3f4'}
    />
  </View>
);

const AlertsScreen = () => {
  const [alerts, setAlerts] = useState({
    highHeartRate: true,
    lowHeartRate: true,
    highTemperature: true,
    lowSteps: true,
  });

  const toggleAlert = (alertKey) => {
    setAlerts(prev => ({
      ...prev,
      [alertKey]: !prev[alertKey]
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="notifications" size={24} color="#1cc910" />
        <Text style={styles.headerTitle}>Health Alerts</Text>
      </View>

      <View style={styles.alertsContainer}>
        <AlertItem
          title="High Heart Rate"
          description="Alert when heart rate exceeds 100 bpm"
          enabled={alerts.highHeartRate}
          onToggle={() => toggleAlert('highHeartRate')}
        />
        <AlertItem
          title="Low Heart Rate"
          description="Alert when heart rate drops below 60 bpm"
          enabled={alerts.lowHeartRate}
          onToggle={() => toggleAlert('lowHeartRate')}
        />
        <AlertItem
          title="High Temperature"
          description="Alert when temperature exceeds 99.5°F"
          enabled={alerts.highTemperature}
          onToggle={() => toggleAlert('highTemperature')}
        />
        <AlertItem
          title="Low Steps"
          description="Alert when daily steps are below 1000"
          enabled={alerts.lowSteps}
          onToggle={() => toggleAlert('lowSteps')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  alertsContainer: {
    padding: 20,
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  alertInfo: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  alertDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default AlertsScreen; 