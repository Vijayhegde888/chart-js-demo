import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // ADD THIS
const data = {
  labels: [
    '-0.001, 0.0252',
    '0.0252, 0.0513',
    '0.0513, 0.058',
    '0.058, 0.0693',
    '0.0693, 0.101',
    '0.101, 0.111',
    '0.111, 0.149',
    '0.149, 0.155',
    '0.155, 0.176',
    '0.176, 0.234',
    '0.234, 0.397',
    '0.397, 1.0',
  ],
  datasets: [
    {
      label: 'Age',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      barPercentage: 1,
      categoryPercentage: 1,
      data: [
        16,
        16,
        16,
        17,
        12,
        24,
        8,
        13,
        15,
        16,
        18,
        12,
      ],
    },
    {
      label: 'Fare',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
      hoverBorderColor: 'rgba(54, 162, 235, 1)',
      barPercentage: 1,
      categoryPercentage: 1,
      data: [
        16,
        17,
        14,
        16,
        14,
        16,
        14,
        17,
        14,
        17,
        12,
        16,
      ],
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const BarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
