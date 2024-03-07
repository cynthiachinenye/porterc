
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['unsuitable', 'Interviewed'],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#42c8f5', '#e6eff2'],
    },
  ],
};

const DoughnutChart = () => (
  <div>
    <Doughnut
      data={data}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'left',
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var total = dataset.data.reduce(function (
                previousValue,
                currentValue
              ) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = Math.floor(
                (currentValue / total) * 100 + 0.5
              );
              return percentage + '%';
            },
          },
        },
      }}
    />
  </div>
);

export default DoughnutChart;
