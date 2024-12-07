import React from 'react';
import ChartComponent from './ChartComponent';
const LineChart = ({ months, profits }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: profits,
        borderColor: 'rgba(0, 191, 255, 0.8)',
        fill: false,
      },
    ],
  };
const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };
return <ChartComponent type="line" data={data} options={options} />;
};
export default LineChart;