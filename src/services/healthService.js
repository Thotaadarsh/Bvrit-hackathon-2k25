import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const useHealthData = () => {
  const [healthData, setHealthData] = useState([]);

  const fetchHealthData = async () => {
    try {
      const response = await axios.get(`${API_URL}/health/latest`);
      setHealthData(prevData => [...prevData, response.data]);
    } catch (error) {
      console.error('Error fetching health data:', error);
    }
  };

  const saveHealthData = async (data) => {
    try {
      await axios.post(`${API_URL}/health`, data);
    } catch (error) {
      console.error('Error saving health data:', error);
    }
  };

  return {
    healthData,
    fetchHealthData,
    saveHealthData,
  };
}; 