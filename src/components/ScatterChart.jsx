import React from 'react';
import ChartComponent from './ChartComponent';
const ScatterChart = ({ expenses, profits }) => {
  const data = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: expenses.map((exp, i) => ({ x: exp, y: profits[i] })),
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };
  return <ChartComponent type="scatter" data={data} options={options} />;
};
export default ScatterChart;