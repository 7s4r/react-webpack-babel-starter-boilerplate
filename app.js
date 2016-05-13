var express = require('express')
var logger = require('morgan')

const app = express()

app.use(logger('dev'))

// Set static files dir
app.use(express.static('node_modules'))
app.use(express.static('src'))

// Serve main page
app.get('/', (req, res) => res.sendFile('index.html'))

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send('ERROR')
})

module.exports = app
