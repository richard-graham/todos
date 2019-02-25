const path = require('path')
const express = require('express')
const server = express()

const todoRoutes = require('./routes/todos')

// serves up index.html to client, dirname and '..' are required for permissions
server.use(express.static(path.join(__dirname, '..', 'public')))
// pre parse inbound requests
server.use(express.json())

server.use('/api/v1/todos', todoRoutes)
server.use('/api/v1/todos/priority/:priority', todoRoutes)
server.use('/api/v1/todos/category/:category', todoRoutes)
server.use('/api/v1/todos/complete/:is_complete', todoRoutes)
server.use('/api/v1/todos/add', todoRoutes)


module.exports = server 