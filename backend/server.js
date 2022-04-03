import express from 'express'

import stations from './_data/sampledata.js'

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('API running...')
})

app.get("/api/stations", (req, res) => {
  res.send(stations)
})

app.get('/api/stations/:id', (req, res) => {
  const station = stations.find((el) => el._id === req.params.id)
  res.send(station)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

