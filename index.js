const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");


const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);

const database = require("@replit/database");
const db = new database();

const gamedirectory = path.join(__dirname, "static");

const HTTPSERVER_PORT = 3000;

app.use(express.static(gamedirectory));

httpserver.listen(HTTPSERVER_PORT);

console.log(`Listened server on: http://localhost:${HTTPSERVER_PORT}`);

io.on("connection", async socket => {
    socket.leaveAll();
    socket.join(0);
});
