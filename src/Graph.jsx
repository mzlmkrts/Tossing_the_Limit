import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ headsCount, totalTosses }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstance.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line', // Use line chart for showing convergence
        data: {
          labels: [], // Labels for tosses (1, 2, 3, ...)
          datasets: [{
            label: 'Proportion of Heads',
            data: [], // Proportions (headsCount / totalTosses)
            borderColor: 'blue',
            fill: false,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 1, // Proportion should range between 0 and 1
              title: {
                display: true,
                text: 'Proportion of Heads',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Number of Tosses',
              },
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (chartInstance.current && totalTosses > 0) {
      // Add the new data point (proportion of heads)
      const proportion = (headsCount / totalTosses).toFixed(2);
      chartInstance.current.data.labels.push(totalTosses); // Label for x-axis (number of tosses)
      chartInstance.current.data.datasets[0].data.push(proportion); // Proportion for y-axis
      chartInstance.current.update(); // Update the chart with the new data
    }
  }, [headsCount, totalTosses]);

  return <canvas ref={chartRef} />;
};

export default Graph;
