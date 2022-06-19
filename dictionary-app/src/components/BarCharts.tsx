import { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from '@emotion/styled';

const BarChart = ({
  letterData: { most, least, letterMost, letterLeast, letterResult },
}: any) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const ChartWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
  `;

  const data = {
    //   labels,
    datasets: [
      {
        label: 'Most',
        data: most,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Least',
        data: least,

        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Chosen letter',
        data: letterResult,

        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <></>;
};

export default BarChart;
