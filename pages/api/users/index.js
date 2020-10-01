const users = require('../users.json')

export default (req, res) => {
  res.statusCode = 200
  res.json({ users })
}
