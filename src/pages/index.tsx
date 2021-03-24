import React from 'react'
import Head from 'next/head'
import InfoTable from '../components/tables/InfoTable'
import ConfirmedChart from '../components/charts/ConfirmedChart'
import DeathsChart from '../components/charts/DeathsChart'
import HealedChart from '../components/charts/HealedChart'
import SuspectsChart from '../components/charts/SuspectsChart'
import { GetStaticProps, NextPage } from 'next'
import Divider from '../components/Divider'

import totalcases from '../assets/totalcasesms.json'

export type CoronaInfo = {
  date: string
  confirmed: number
  deaths: number
  healed: number
  suspects: number
}

type HomeProps = {
  coronaCases: CoronaInfo[]
}

const Home: NextPage<HomeProps> = ({ coronaCases }: HomeProps) => {
  const lineChartLabels = []

  const confirmedCasesGrossValue = []
  const deathCasesGrossValue = []
  const healedCasesGrossValue = []
  const suspectCasesGrossValue = []

  const confirmedCasesAverageValue = []
  const deathCasesAverageValue = []
  const healedCasesAverageValue = []
  const suspectCasesAverageValue = []

  const averageDays = 7

  for (let index = 0; index < coronaCases.length; index++) {
    const [year, month, day] = coronaCases[index].date.split('-')
    const date = `${day}/${month}/${year}`

    lineChartLabels.push(date)

    if (index === 0) {
      confirmedCasesGrossValue.push(coronaCases[index].confirmed)
      deathCasesGrossValue.push(coronaCases[index].deaths)
      healedCasesGrossValue.push(coronaCases[index].healed)
      suspectCasesGrossValue.push(coronaCases[index].suspects)

      confirmedCasesAverageValue.push(coronaCases[index].confirmed)
      deathCasesAverageValue.push(coronaCases[index].deaths)
      healedCasesAverageValue.push(coronaCases[index].healed)
      suspectCasesAverageValue.push(coronaCases[index].suspects)

      continue
    }

    let sumConfirmed = 0
    let sumDeaths = 0
    let sumHealed = 0
    let sumSuspects = 0

    for (let dayCount = 1; dayCount <= averageDays; dayCount++) {
      if (index - dayCount <= 0) {
        continue
      }

      sumConfirmed += confirmedCasesGrossValue[index - dayCount]
      sumDeaths += deathCasesGrossValue[index - dayCount]
      sumHealed += healedCasesGrossValue[index - dayCount]
      sumSuspects += suspectCasesGrossValue[index - dayCount]
    }

    const confirmedGross =
      coronaCases[index].confirmed - coronaCases[index - 1].confirmed
    const deathsGross =
      coronaCases[index].deaths - coronaCases[index - 1].deaths
    const healedGross =
      coronaCases[index].healed - coronaCases[index - 1].healed
    const suspectsGross =
      coronaCases[index].suspects - coronaCases[index - 1].suspects

    confirmedCasesGrossValue.push(confirmedGross)
    deathCasesGrossValue.push(deathsGross)
    healedCasesGrossValue.push(healedGross)
    suspectCasesGrossValue.push(suspectsGross)

    const confirmedAverage = Math.floor(sumConfirmed / averageDays)
    const deathsAverage = Math.floor(sumDeaths / averageDays)
    const healedAverage = Math.floor(sumHealed / averageDays)
    const suspectsAverage = Math.floor(sumSuspects / averageDays)

    confirmedCasesAverageValue.push(confirmedAverage)
    deathCasesAverageValue.push(deathsAverage)
    healedCasesAverageValue.push(healedAverage)
    suspectCasesAverageValue.push(suspectsAverage)
  }

  return (
    <>
      <Head>
        <title>Casos de Coronavírus no Mato Grosso do Sul</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center container mx-auto">
          <InfoTable cases={coronaCases} />
          <Divider />
          <ConfirmedChart
            labels={lineChartLabels}
            grossValue={confirmedCasesGrossValue}
            averageValue={confirmedCasesAverageValue}
          />
          <Divider />
          <DeathsChart
            labels={lineChartLabels}
            grossValue={deathCasesGrossValue}
            averageValue={deathCasesAverageValue}
          />
          <Divider />
          <HealedChart
            labels={lineChartLabels}
            grossValue={healedCasesGrossValue}
            averageValue={healedCasesAverageValue}
          />
          <Divider />
          <SuspectsChart
            labels={lineChartLabels}
            grossValue={suspectCasesGrossValue}
            averageValue={suspectCasesAverageValue}
          />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      coronaCases: totalcases
    }
  }
}

export default Home
