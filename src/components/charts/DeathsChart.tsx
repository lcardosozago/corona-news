import React from 'react'
import { Bar } from 'react-chartjs-2'

type DeathsChartProps = {
  labels: string[]
  grossValue: number[]
  averageValue: number[]
}

const DeathsChart: React.FC<DeathsChartProps> = ({
  labels,
  grossValue,
  averageValue
}: DeathsChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Casos de óbito',
        backgroundColor: '#ef000066',
        borderColor: '#ef000066',
        order: 1,
        data: grossValue,
        yAxisID: 1
      },
      {
        label: 'Média dos últimos 7 dias',
        type: 'line',
        fill: false,
        backgroundColor: '#ef0000',
        borderColor: '#ef0000',
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

export default DeathsChart
