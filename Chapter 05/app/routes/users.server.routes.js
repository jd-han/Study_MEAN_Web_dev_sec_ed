/**
 * Created by human on 2017-07-13.
 */
const users =
    require('../../app/controllers/users.server.controller');

module.exports = function (app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);

    app.route('/users/:userId')
        .get(users.read);

    app.param('userId', users.userByID);
};