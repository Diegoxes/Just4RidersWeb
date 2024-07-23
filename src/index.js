const express = require("express");


const server = express();

server.use(express.json());

server.listen(3001, () => {
    console.log(`Server listening on port ${3001}`);
  });


module.exports = server;

