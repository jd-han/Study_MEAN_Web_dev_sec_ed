/**
 * Created by human on 2017-07-13.
 */
const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    /*
        from Mongoose 4.11.0, need useMongoClient property.
     */
    const db = mongoose.connect(config.db, {
        useMongoClient: true
    });

    require('../app/models/user.server.model');

    return db;
};