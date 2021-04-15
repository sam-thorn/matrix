const path = require('path')
const express = require('express')

// EDIT THIS LINE
const widgets = require('./routes/widgets')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// EDIT THIS LINE
server.use('/api/v1/widgets', widgets)

module.exports = server
