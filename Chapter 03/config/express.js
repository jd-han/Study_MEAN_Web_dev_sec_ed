/**
 * Created by human on 2017-07-07.
 */
const express = require('express');

module.exports = function () {
    const app = express();
    require('../app/routes/index.server.routes.js')(app);
    return app;
};