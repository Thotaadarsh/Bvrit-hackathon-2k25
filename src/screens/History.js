import React from 'react';

const History=()=>{
  const historyData = [
    { date: '2024-03-20', heartRate: 75, steps: 2000, temperature: 98.6 },
    { date: '2024-03-19', heartRate: 78, steps: 1850, temperature: 98.4 },
    { date: '2024-03-18', heartRate: 72, steps: 2100, temperature: 98.8 },
    { date: '2024-03-17', heartRate: 80, steps: 1950, temperature: 98.5 },
    { date: '2024-03-16', heartRate: 77, steps: 2200, temperature: 98.7 },
  ];

  return (
    <div>
      <h1>Health History</h1>
      
      <div className="history-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Heart Rate</th>
              <th>Steps</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.heartRate} bpm</td>
                <td>{record.steps}</td>
                <td>{record.temperature}°F</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;