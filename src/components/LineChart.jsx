import React from 'react';
import ChartComponent from './ChartComponent';
const LineChart = ({ months, profits }) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: profits,
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