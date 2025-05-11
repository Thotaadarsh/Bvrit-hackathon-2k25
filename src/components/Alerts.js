import React, { useState } from 'react';

function Alerts() {
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
    <div>
      <h1>Health Alerts</h1>
      
      <div className="alerts-container">
        <div className="alert-card">
          <div>
            <h3>High Heart Rate</h3>
            <p>Alert when heart rate exceeds 100 bpm</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={alerts.highHeartRate}
              onChange={() => toggleAlert('highHeartRate')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="alert-card">
          <div>
            <h3>Low Heart Rate</h3>
            <p>Alert when heart rate drops below 60 bpm</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={alerts.lowHeartRate}
              onChange={() => toggleAlert('lowHeartRate')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="alert-card">
          <div>
            <h3>High Temperature</h3>
            <p>Alert when temperature exceeds 99.5°F</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={alerts.highTemperature}
              onChange={() => toggleAlert('highTemperature')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="alert-card">
          <div>
            <h3>Low Steps</h3>
            <p>Alert when daily steps are below 1000</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={alerts.lowSteps}
              onChange={() => toggleAlert('lowSteps')}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Alerts; 