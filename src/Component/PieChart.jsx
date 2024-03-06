// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Container } from 'react-bootstrap';
// import 'chart.js/auto';
// const data = {
//     labels: ['un', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#2ECC71',
//           '#9B59B6',
//           '#FFA500'
//         ],
//         hoverBackgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#2ECC71',
//           '#9B59B6',
//           '#FFA500'
//         ]
//       }
//     ]
//   };
  

//   function MyDoughnutChart() {
//     return (
//       <Container className='w-50'>
//         <Doughnut data={data} 
//         width={50}
//         height={50} />
//       </Container>
//     );
//   }
//   export default MyDoughnutChart;
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
          position: 'right',
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
