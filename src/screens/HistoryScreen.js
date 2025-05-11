import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="time" size={24} color="#1cc910" />
        <Text style={styles.headerTitle}>Health History</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>History screen coming soon...</Text>
      </ScrollView>
    </View>
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
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HistoryScreen; 