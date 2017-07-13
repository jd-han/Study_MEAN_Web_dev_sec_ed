/**
 * Created by human on 2017-07-13.
 */
const config = require('./config');
const mongoose = require('mongoose');
module.exports = function () {
    const db = mongoose.createConnection(config.db);
    return db;
};