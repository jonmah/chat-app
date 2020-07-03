const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const { addUser, removeUser, getUser, getUsersFromRoom } = require('./users')

const PORT = process.env.port || 5000

const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', socket => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })

    if (error) return callback(error)

    // User gets a message when entering the room
    socket.emit('message', {
      user: 'admin',
      text: `Welcome, ${user.name} to the room ${user.room}!`
    })
    // Room gets a message when User enters the room
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name}, has joined!` })
    socket.join(user.room)
    // callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)
    console.log(message)
    io.to(user.room).emit('message', { user: user.name, text: message })
    // callback()
  })

  socket.on('disconnect', () => {
    console.log('User has left')
  })
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
