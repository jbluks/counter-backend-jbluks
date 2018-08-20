const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let counter = 0

app.get('/counter', (req, res) => {
  res.json({ counter })
})

app.post('/counter', (req, res) => {
  counter = req.body.counter
  res.json({ counter })
})


app.listen(port)