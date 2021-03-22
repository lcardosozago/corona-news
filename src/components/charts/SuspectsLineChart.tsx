import React from 'react'
import { Line } from 'react-chartjs-2'

type SuspectsLineChartProps = {
  labels: string[]
  cases: number[]
}

const SuspectsLineChart: React.FC<SuspectsLineChartProps> = ({
  labels,
  cases
}: SuspectsLineChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Suspeitos',
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgba(50,50,50,0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(50,50,50,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        pointHoverBorderColor: 'rgba(0,0,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cases
      }
    ]
  }

  return <Line data={data} />
}

export default SuspectsLineChart
