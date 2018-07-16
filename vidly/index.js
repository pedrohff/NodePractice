const express = require("express");
const logger = require('winston');
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require('./startup/validation');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger.info(`Listening on port ${port}...`));

module.exports = server;