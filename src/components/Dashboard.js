import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {
  const [healthData, setHealthData] = useState({
    heartRate: 75,
    steps: 2000,
    temperature: 98.6
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Heart Rate',
      data: [],
      borderColor: '#1cc910',
      tension: 0.4
    }]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthData({
        heartRate: Math.floor(70 + Math.random() * 20),
        steps: healthData.steps + Math.floor(Math.random() * 10),
        temperature: 98.4 + Math.random() * 0.4
      });

      setChartData(prev => ({
        labels: [...prev.labels, new Date().toLocaleTimeString()].slice(-10),
        datasets: [{
          ...prev.datasets[0],
          data: [...prev.datasets[0].data, Math.floor(70 + Math.random() * 20)].slice(-10)
        }]
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Health Dashboard</h1>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Heart Rate</h3>
          <div className="metric-value">{healthData.heartRate}</div>
          <div className="metric-unit">bpm</div>
        </div>
        
        <div className="metric-card">
          <h3>Steps</h3>
          <div className="metric-value">{healthData.steps}</div>
          <div className="metric-unit">steps</div>
        </div>
        
        <div className="metric-card">
          <h3>Temperature</h3>
          <div className="metric-value">{healthData.temperature.toFixed(1)}</div>
          <div className="metric-unit">°F</div>
        </div>
      </div>

      <div className="chart-container">
        <h2>Heart Rate Trend</h2>
        <Line data={chartData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Last 10 Readings'
            }
          },
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }} />
      </div>
    </div>
  );
}

export default Dashboard; 