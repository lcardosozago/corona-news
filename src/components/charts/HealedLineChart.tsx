import React from 'react'
import { Line } from 'react-chartjs-2'

type HealedLineChartProps = {
  labels: string[]
  cases: number[]
}

const HealedLineChart: React.FC<HealedLineChartProps> = ({
  labels,
  cases
}: HealedLineChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Curados',
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgba(0,180,0,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,180,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,120,0,1)',
        pointHoverBorderColor: 'rgba(0,120,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cases
      }
    ]
  }

  return <Line data={data} />
}

export default HealedLineChart
