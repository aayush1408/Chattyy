const express = require('express');
const socket = require('socket.io');
let app = express();

//api running
let server = app.listen(5000,()=>{
    console.log('Server running on port 5000');
});

//public files
app.use(express.static('public'));

//socket
let io = socket(server);

io.on('connection',(socket)=>{
    console.log('Connection made '+socket.id);

    socket.on('chat',(data)=>{
        console.log(data);
        io.sockets.emit('chat',data);
    });
     socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});

