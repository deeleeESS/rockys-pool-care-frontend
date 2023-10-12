// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils"

const WEBHOOK_API_KEY = process.env.WEBHOOK_API_KEY;

type Data = {
  message: string
}

function checkAPIKey(req, apiKey) {
  console.log(req.headers)
  const providedKey = req.headers['webhook_api_key']; // Assuming the key is sent as "x-api-key"
  
  if (!providedKey) {
      throw new Error('No API key provided.');
  }

  if (providedKey !== apiKey) {
      throw new Error('Invalid API key.');
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
      //Check the API key before proceeding
      checkAPIKey(req, "TESTER");
      console.log(req.headers)

      // If the key is valid, the rest of your endpoint logic goes here:
      if (req.method === 'POST') {
        console.log('POST data:', req.body);
      }
      res.status(200).json({ message: 'Your endpoint logic results.' });

  } catch (error) {
      // Handle errors thrown by checkAPIKey or any other errors
      console.log(error)
      res.status(401).json({ message: error.message }); // 401 for Unauthorized
  }
};
