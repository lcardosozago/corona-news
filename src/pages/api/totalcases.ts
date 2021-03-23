import { NextApiRequest, NextApiResponse } from 'next'

import totalcases from '../../assets/totalcasesms.json'

type CoronaDailyInfo = {
  confirmed: number
  deaths: number
  healed: number
  suspects: number
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<CoronaDailyInfo[]>
): void => {
  if (req.method === 'GET') {
    res.status(200).json(totalcases)
  }
}

export default handler
