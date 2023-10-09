// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils"


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    console.log('POST data:', req.body);
  }

  res.status(200).json({ name: 'John Doe' })
}
