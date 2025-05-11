import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import History from './components/History';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <WatchData/> */}
        <nav className="navbar">
          <div className="nav-brand">Health Monitor</div>
          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/history">History</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 