const express = require("express");
const SocketServer = require('ws').Server;
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, '/');

server.use((req, res) => res.sendFile(INDEX))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({server});

wss.on('connection', (ws) => {
	console.log('Client Connected');
	ws.on('close', () => console.log('Client Disconnected'));
});

setInterval(() => {
	wss.clients.forEach((client) => {
		client.send(new Date().toTimeString());
	})
}, 1000);