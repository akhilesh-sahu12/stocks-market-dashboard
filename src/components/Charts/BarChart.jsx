import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
      datasets: [{
        label: 'Dataset 1',
        data: [10, 20, 30, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        x: [{
          type: 'category',
          position: 'bottom'
        }],
        y: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} width="400px" height="400px"></canvas>
    </div>
  );
};

export default BarChart;
