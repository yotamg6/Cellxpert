import styled from '@emotion/styled';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { LetterInfo } from '../interfaces';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let labels: string[] = ['Results'];

interface LetterProps {
  letterData: LetterInfo;
}

const BarChart = ({
  letterData: { most, least, letterResult, title },
}: LetterProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const ChartWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
    background-color: rgb(253, 215, 226);
  `;

  const data = {
    labels,
    datasets: [
      {
        label: 'Most',
        data: [most],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Least',
        data: [least],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Chosen letter',
        data: [letterResult],
        backgroundColor: 'rgba(255, 207, 86, 0.966)',
      },
    ],
  };
  return (
    <>
      <ChartWrapper>
        <Bar options={options} data={data} />
      </ChartWrapper>
    </>
  );
};

export default BarChart;
