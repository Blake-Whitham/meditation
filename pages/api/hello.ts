import { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.length) {
    res.status(200).json({ text: 'Hello' })
  } else {
    res.status(200).json({ text: 'else' })

  }

}
