// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = require('./users.json')

export default (req, res) => {
  res.statusCode = 200
  res.json({ users })
}
