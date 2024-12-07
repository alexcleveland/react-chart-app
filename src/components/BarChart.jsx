import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ months, sales }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: sales,
        
      },
    ],
  };

const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };
return <ChartComponent type="bar" data={data} options={options} />;
};
export default BarChart;