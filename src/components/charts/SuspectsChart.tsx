import React from 'react'
import { Bar } from 'react-chartjs-2'

type SuspectsChartProps = {
  labels: string[]
  grossValue: number[]
  averageValue: number[]
}

const SuspectsChart: React.FC<SuspectsChartProps> = ({
  labels,
  grossValue,
  averageValue
}: SuspectsChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Casos suspeitos',
        backgroundColor: '#7c7c7c66',
        borderColor: '#7c7c7c66',
        order: 1,
        data: grossValue,
        yAxisID: 1
      },
      {
        label: 'Média dos últimos 7 dias',
        type: 'line',
        fill: false,
        backgroundColor: '#7c7c7c',
        borderColor: '#7c7c7c',
        lineTension: 0.1,
        pointBorderWidth: 1,
        pointRadius: 1,
        pointHoverRadius: 5,
        order: 2,
        data: averageValue,
        yAxisID: 1
      }
    ]
  }

  const options = {
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          },

          labels: labels
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 1,
          gridLines: {
            display: true
          },
          labels: {
            show: false
          }
        }
      ]
    }
  }

  return <Bar width={500} height={300} data={data} options={options} />
}

export default SuspectsChart
