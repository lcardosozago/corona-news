import React from 'react'

const InfoTable = ({ data }) => {
  const twoLastCoronaDailyInfo = data.slice(Math.max(data.length - 2, 0))

  const formatNumber = number => {
    return new Intl.NumberFormat('pt-BR').format(number)
  }

  const labels = [
    { label: 'Confirmados', classes: 'cn-confirmed-color' },
    { label: 'Óbitos', classes: 'cn-deaths-color' },
    { label: 'Curados', classes: 'cn-healed-color' },
    { label: 'Suspeitos', classes: 'cn-suspects-color' }
  ]

  const treatedCoronaInfo = [
    {
      key: 0,
      lastday:
        twoLastCoronaDailyInfo[1].confirmed -
        twoLastCoronaDailyInfo[0].confirmed,
      total: twoLastCoronaDailyInfo[1].confirmed
    },
    {
      key: 1,
      lastday:
        twoLastCoronaDailyInfo[1].deaths - twoLastCoronaDailyInfo[0].deaths,
      total: twoLastCoronaDailyInfo[1].deaths
    },
    {
      key: 2,
      lastday:
        twoLastCoronaDailyInfo[1].healed - twoLastCoronaDailyInfo[0].healed,
      total: twoLastCoronaDailyInfo[1].healed
    },
    {
      key: 3,
      lastday:
        twoLastCoronaDailyInfo[1].suspects - twoLastCoronaDailyInfo[0].suspects,
      total: twoLastCoronaDailyInfo[1].suspects
    }
  ]

  return (
    <table className="cn-table">
      <thead>
        <tr className="cn-table-row-head">
          <th className="cn-table-column-space">Casos</th>
          <th className="cn-table-column-space">Últimas 24 horas</th>
          <th className="cn-table-column-space">Total</th>
        </tr>
      </thead>
      <tbody>
        {treatedCoronaInfo.map((row, index) => {
          return (
            <tr className="cn-table-row-body" key={row.key}>
              <td className={'cn-table-column-space ' + labels[index].classes}>
                {labels[index].label}
              </td>
              <td className={'cn-table-column-space ' + labels[index].classes}>
                {formatNumber(row.lastday)}
              </td>
              <td className={'cn-table-column-space ' + labels[index].classes}>
                {formatNumber(row.total)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default InfoTable
