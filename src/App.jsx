import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

function App() {
  const [data, setData] = useState(null); 
useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Interactive Dashboard</h1>
      <BarChart months={data.months} sales={data.sales} />
      <LineChart months={data.months} profits={data.profits} />
      <ScatterChart expenses={data.expenses} profits={data.profits} />
      <BubbleChart sales={data.sales} expenses={data.expenses} profits={data.profits} />
    </div>
  );
}

export default App;
