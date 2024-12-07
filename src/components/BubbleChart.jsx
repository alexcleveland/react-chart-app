import React from 'react';
import ChartComponent from './ChartComponent';
const BubbleChart = ({ sales, expenses, profits }) => {
  const data = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: sales.map((sale, i) => ({
          x: expenses[i],
          y: profits[i],
          r: sale / 10,
        })),
        backgroundColor: 'rgba(50, 205, 50, 0.6)',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };
  return <ChartComponent type="bubble" data={data} options={options} />;
};
export default BubbleChart;
