"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering components necessary for the line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Linegraph = ({data}:{data:any}) => {
  return (
    <div><Line options={{
        scales: {
          x: {
            type: 'category',
            labels: data.labels,
          },
          y: {
            type: 'linear',
            beginAtZero: false
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }} data={data} /></div>
  )
}

export default Linegraph