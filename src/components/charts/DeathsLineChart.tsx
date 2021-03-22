import React from 'react'
import { Line } from 'react-chartjs-2'

type DeathsLineChartProps = {
  labels: string[]
  cases: number[]
}

const DeathsLineChart: React.FC<DeathsLineChartProps> = ({
  labels,
  cases
}: DeathsLineChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Óbitos',
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgba(255,0,0,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(160,0,0,1)',
        pointHoverBorderColor: 'rgba(160,0,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cases
      }
    ]
  }

  return <Line data={data} />
}

export default DeathsLineChart
