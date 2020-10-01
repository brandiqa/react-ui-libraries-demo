const users = require('../users.json')

export default (req, res) => {
  const {
    query: { id },
  } = req
  const user = users.find((user) => user.id == id)
  if (user) {
    res.statusCode = 200
    res.json({ user })
  } else {
    res.statusCode = 404
    res.json({ error: `User ${id} NOT found!` })
  }
}
