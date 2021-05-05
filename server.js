const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const fs = require('fs')
const path = require('path')
const {
  animals
} = require('./data/animals')
const express = require('express')
const app = express()

//middleware
// parse incoming string or array data
app.use(express.urlencoded({
  extended: true
}))
// parse incoming JSON data
app.use(express.json())

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//instructs server to make certain files readily available
app.use(express.static('public'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`)
})