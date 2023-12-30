import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        data: [30, 50, 20],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 205, 86, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
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

export default DoughnutChart;
