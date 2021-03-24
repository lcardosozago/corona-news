import React from 'react'
import { Bar } from 'react-chartjs-2'

type ConfirmedChartProps = {
  labels: string[]
  grossValue: number[]
  averageValue: number[]
}

const ConfirmedChart: React.FC<ConfirmedChartProps> = ({
  labels,
  grossValue,
  averageValue
}: ConfirmedChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Casos confirmados',
        backgroundColor: '#dbd30066',
        borderColor: '#dbd30066',
        order: 1,
        data: grossValue,
        yAxisID: 1
      },
      {
        label: 'Média dos últimos 7 dias',
        type: 'line',
        fill: false,
        backgroundColor: '#dbd300',
        borderColor: '#dbd300',
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

  return <Bar data={data} options={options} />
}

export default ConfirmedChart
