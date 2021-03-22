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
  const lineChartConfirmedCases = []
  const lineChartDeathsCases = []
  const lineChartHealedCases = []
  const lineChartSuspectsCases = []

  coronaCases.forEach((dayInfos, index) => {
    lineChartLabels.push(dayInfos.date)

    if (index === 0) {
      lineChartConfirmedCases.push(dayInfos.confirmed)
      lineChartDeathsCases.push(dayInfos.deaths)
      lineChartHealedCases.push(dayInfos.healed)
      lineChartSuspectsCases.push(dayInfos.suspects)

      return
    }

    const confirmed =
      coronaCases[index].confirmed - coronaCases[index - 1].confirmed
    const deaths = coronaCases[index].deaths - coronaCases[index - 1].deaths
    const healed = coronaCases[index].healed - coronaCases[index - 1].healed
    const suspects =
      coronaCases[index].suspects - coronaCases[index - 1].suspects

    lineChartConfirmedCases.push(confirmed)
    lineChartDeathsCases.push(deaths)
    lineChartHealedCases.push(healed)
    lineChartSuspectsCases.push(suspects)
  })

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
            cases={lineChartConfirmedCases}
          />
          <DeathsLineChart
            labels={lineChartLabels}
            cases={lineChartDeathsCases}
          />
          <HealedLineChart
            labels={lineChartLabels}
            cases={lineChartHealedCases}
          />
          <SuspectsLineChart
            labels={lineChartLabels}
            cases={lineChartSuspectsCases}
          />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/api/totalcases')

  return {
    props: {
      coronaCases: response.data
    }
  }
}

export default Home
