const express = require("express");
const app = express();
const expressServer = app.listen(4000,()=>{
    console.log("Welcome");
});

const socketio = require("socket.io");
const io = socketio(expressServer,{});