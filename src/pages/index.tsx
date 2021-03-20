import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import InfoTable from '../components/tables/InfoTable'
import ConfirmedLineChart from '../components/charts/ConfirmedLineChart'

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <div className="flex justify-center container mx-auto">
          <InfoTable data={data} />
          <ConfirmedLineChart data={data} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async context => {
  const response = await axios.get('http://localhost:3000/api/totalcases')

  return {
    props: {
      data: response.data
    }
  }
}

export default Home
