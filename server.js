const express = require("express");
const SocketServer = require('ws').Server;
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8080;
const PUBLIC = path.join(__dirname, 'public');

server.use(express.static(PUBLIC));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({port: 8090});

wss.on('connection', (ws) => {
	console.log('Client Connected');
	ws.on('close', () => console.log('Client Disconnected'));
});

setInterval(() => {
	wss.clients.forEach((client) => {
		client.send(new Date().toTimeString());
	})
}, 1000);