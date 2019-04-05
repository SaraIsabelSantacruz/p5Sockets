var express = require ('express')
var socket = require('socket.io')
var app = express()

inicio = (req, res) => {
    res.send("Este es el <h1>Home</h1>")
}
app.use("/", express.static('public'))

var server = app.listen(8000)

var io = socket(server)

newConnection = (socket) => {
    console.log('New Socket Connection', socket.id)

    socket.on('mouse', (data) => {
        socket.broadcast.emit('mouse', data)
    })
}

io.sockets.on('connection', newConnection)

console.log('My socket server is running ...')