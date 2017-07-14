/**
 * Created by human on 2017-07-07.
 */
const index = require('../controllers/index.server.controller');

module.exports = function (app) {
    app.get('/', index.render);
};