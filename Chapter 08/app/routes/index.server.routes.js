/**
 * Created by human on 2017-07-07.
 */
module.exports = function(app) {
    const index = require('../controllers/index.server.controller');

    app.get('/*', index.render);
};