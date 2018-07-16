const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function () {
    winston.info(`Current environment: ${process.env.NODE_ENV}`);
    const db = config.get('db');
    mongoose.connect(db, {useNewUrlParser: true})
        .then(() => winston.info(`Connected to ${db}...`));
}