const express = require("express");

const apiRouter = require("./router");
const configureMiddleware = require("./serverMidConfig");
const server = express();

configureMiddleware(server);
server.use("/api", apiRouter);

module.exports = server;
