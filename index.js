const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const { v4 } = require("uuid");

const mongoDB = require("./config/db");

const server = http.createServer(app);
const io = socketio(server);
mongoDB();

let connectedUsers = [];

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Server connected !");
});
