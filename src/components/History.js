import React, { useEffect, useState } from 'react';
const sampleHistory = [
  { time: '11:00 AM', heartRate: 78, steps: 2100, temperature: 98.7 },
  { time: '11:10 AM', heartRate: 82, steps: 2300, temperature: 98.6 },
  { time: '11:20 AM', heartRate: 75, steps: 2500, temperature: 98.5 },
  { time: '11:30 AM', heartRate: 80, steps: 2700, temperature: 98.8 },
];
const API_URL = 'https://your-smartwatch-api.com/data';

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setHistoryData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (err) {
        setError('Error fetching data, showing sample history');
        setHistoryData(sampleHistory); // Fallback to sample data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <div>{error}</div>
        <table className="history-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Heart Rate (bpm)</th>
              <th>Steps</th>
              <th>Temperature (°F)</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.time}</td>
                <td>{entry.heartRate}</td>
                <td>{entry.steps}</td>
                <td>{entry.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="history-container">
      <h2>Health History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Heart Rate (bpm)</th>
            <th>Steps</th>
            <th>Temperature (°F)</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.heartRate}</td>
              <td>{entry.steps}</td>
              <td>{entry.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
