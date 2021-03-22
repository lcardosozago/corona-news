import { NextApiRequest, NextApiResponse } from 'next'

import totalcases from '../../assets/totalcasesms.json'

type CoronaDailyInfo = {
  confirmed: number
  deaths: number
  healed: number
  suspects: number
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<CoronaDailyInfo[]>
): void => {
  res.status(200).json(totalcases)
}
