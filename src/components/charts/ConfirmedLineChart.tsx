import React from 'react'
import { Line } from 'react-chartjs-2'

type ConfirmedLineChartProps = {
  labels: string[]
  cases: number[]
}

const ConfirmedLineChart: React.FC<ConfirmedLineChartProps> = ({
  labels,
  cases
}: ConfirmedLineChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Confirmados',
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgba(255,200,0,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,200,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(200,160,0,1)',
        pointHoverBorderColor: 'rgba(200,160,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cases
      }
    ]
  }

  return <Line data={data} />
}

export default ConfirmedLineChart
