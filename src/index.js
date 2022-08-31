const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const routerNavigation = require('./routes')
const path = require('path')

require('dotenv').config()

const app = express()
const port = process.env.PORT
const scheduledFunctions = require('../src/middleware/cronJob')

app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/backend1/api/v1', routerNavigation)
app.use('/backend1/api', express.static('src/uploads'))
// app.use('/backend1/api', express.static(path.join(__dirname, '/uploads')))

app.listen(port, () => {
  console.log(`Express app now listen on ${port}`)
})

// start cronjob
scheduledFunctions.initScheduledJobs()
