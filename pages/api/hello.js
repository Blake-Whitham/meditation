// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (!req.query.length) {
    res.status(200).json({ text: 'Hello' })
  } else {
    res.status(200).json({ text: 'else' })

  }

}
