import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useHealthData } from '../services/healthService';
import { HealthMetric } from '../components/HealthMetric';

const DashboardScreen = () => {
  const { healthData, fetchHealthData } = useHealthData();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  });

  useEffect(() => {
    if (fetchHealthData) {
      fetchHealthData();
    }
    const interval = setInterval(fetchHealthData, 3000);
    return () => clearInterval(interval);
  }, [fetchHealthData]);

  useEffect(() => {
    if (healthData.length > 0) {
      const lastFive = healthData.slice(-5);
      setChartData({
        labels: lastFive.map(d => new Date(d.timestamp).toLocaleTimeString()),
        datasets: [{
          data: lastFive.map(d => d.heartRate)
        }]
      });
    } else {
      setChartData({
        labels: [],
        datasets: [{ data: [] }]
      });
    }
  }, [healthData]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.metricsContainer}>
        <HealthMetric
          title="Heart Rate"
          value={healthData.length > 0 ? healthData[healthData.length - 1]?.heartRate : 0}
          unit="bpm"
          icon="heart"
        />
        <HealthMetric
          title="Steps"
          value={healthData.length > 0 ? healthData[healthData.length - 1]?.steps : 0}
          unit="steps"
          icon="footsteps"
        />
        <HealthMetric
          title="Temperature"
          value={healthData.length > 0 ? healthData[healthData.length - 1]?.temperature : 0}
          unit="°F"
          icon="thermometer"
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Heart Rate Trend</Text>
        <LineChart
          data={chartData}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#1e2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          bezier
          style={styles.chart}
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
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  chartContainer: {
    padding: 20,
  },
  chartTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  }
});

export default DashboardScreen;
