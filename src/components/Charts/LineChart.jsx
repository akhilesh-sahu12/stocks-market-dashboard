import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
      datasets: [{
        label: 'Dataset 1',
        data: [10, 20, 30, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8
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
      type: 'line',
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

export default LineChart;
