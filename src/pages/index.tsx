import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import InfoTable from '../components/tables/InfoTable'
import ConfirmedLineChart from '../components/charts/ConfirmedLineChart'
import DeathsLineChart from '../components/charts/DeathsLineChart'
import HealedLineChart from '../components/charts/HealedLineChart'
import SuspectsLineChart from '../components/charts/SuspectsLineChart'
import { GetStaticProps, NextPage } from 'next'

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

      continue
    }

    const confirmed =
      coronaCases[index].confirmed - coronaCases[index - 1].confirmed
    const deaths = coronaCases[index].deaths - coronaCases[index - 1].deaths
    const healed = coronaCases[index].healed - coronaCases[index - 1].healed
    const suspects =
      coronaCases[index].suspects - coronaCases[index - 1].suspects

    confirmedCasesGrossValue.push(confirmed)
    deathCasesGrossValue.push(deaths)
    healedCasesGrossValue.push(healed)
    suspectCasesGrossValue.push(suspects)

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

    const confirmedAverage = parseInt(sumConfirmed / averageDays)
    const deathsAverage = parseInt(sumDeaths / averageDays)
    const healedAverage = parseInt(sumHealed / averageDays)
    const suspectsAverage = parseInt(sumSuspects / averageDays)

    confirmedCasesAverageValue.push(confirmedAverage)
    deathCasesAverageValue.push(deathsAverage)
    healedCasesAverageValue.push(healedAverage)
    suspectCasesAverageValue.push(suspectsAverage)
  }

  console.log(confirmedCasesAverageValue)
  console.log(deathCasesAverageValue)
  console.log(healedCasesAverageValue)
  console.log(suspectCasesAverageValue)

  return (
    <>
      <Head>
        <title>Casos de Coronavírus no Mato Grosso do Sul</title>
      </Head>
      <main>
        <div className="flex flex-col justify-center container mx-auto">
          <InfoTable cases={coronaCases} />
          <ConfirmedLineChart
            labels={lineChartLabels}
            cases={confirmedCasesGrossValue}
          />
          <DeathsLineChart
            labels={lineChartLabels}
            cases={deathCasesGrossValue}
          />
          <HealedLineChart
            labels={lineChartLabels}
            cases={healedCasesGrossValue}
          />
          <SuspectsLineChart
            labels={lineChartLabels}
            cases={suspectCasesGrossValue}
          />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    `http://${process.env.HOSTNAME}:${process.env.PORT}/api/totalcases`
  )

  return {
    props: {
      coronaCases: response.data
    }
  }
}

export default Home
