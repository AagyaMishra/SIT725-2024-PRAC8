const express = require('express');
require('./mongoConnection');
let router = require('./routes/foodItemRouter');
const bodyParser = require('body-parser');
const app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use('/api/foodItems', router)

app.listen(3000, (req,res)=>{
    console.log("Server is running");
});

io.on('connection', (socket)=> {
    console.log("Client is Connected!!");
    socket.on('disconnect', () => {
        console.log('Client Connection Disconnected!!');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

http.listen(3001, (req,res)=>{
    console.log("Server is running");
});
       