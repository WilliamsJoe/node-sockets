const express = require("express");

const server = express();
const PORT = 8080;

server.use((req, res) => res.sendFile(INDEX))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));