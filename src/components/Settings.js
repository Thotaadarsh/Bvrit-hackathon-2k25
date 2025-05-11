import React, { useState } from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    units: 'metric',
    updateInterval: 3,
  });

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div>
      <h1>Settings</h1>
      
      <div className="settings-container">
        <div className="setting-card">
          <h3>Notifications</h3>
          <p>Enable push notifications for health alerts</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-card">
          <h3>Dark Mode</h3>
          <p>Toggle dark/light theme</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleChange('darkMode', e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-card">
          <h3>Units</h3>
          <p>Choose measurement system</p>
          <select
            value={settings.units}
            onChange={(e) => handleChange('units', e.target.value)}
            className="setting-select"
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>

        <div className="setting-card">
          <h3>Update Interval</h3>
          <p>Set data refresh rate (seconds)</p>
          <select
            value={settings.updateInterval}
            onChange={(e) => handleChange('updateInterval', Number(e.target.value))}
            className="setting-select"
          >
            <option value="1">1 second</option>
            <option value="3">3 seconds</option>
            <option value="5">5 seconds</option>
            <option value="10">10 seconds</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings; 