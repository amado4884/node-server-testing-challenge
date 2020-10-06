const express = require("express");
const server = express();
const images = require("./routes/images");
const root = require("./routes/index");
server.use(express.json());

server.use("/", root);
server.use("/images", images);

module.exports = server;
