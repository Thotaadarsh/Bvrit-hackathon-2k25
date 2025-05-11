
import { useEffect, useState } from 'react';

function WatchData() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/api/latest');
      const json = await res.json();
      setData(json);
    };

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Watch Data</h2>
      <p>Heart Rate: {data.heartRate}</p>
      <p>Steps: {data.steps}</p>
      <p>Sleep: {data.sleep}</p>
    </div>
  );
}

export default WatchData;
