/**
 * Created by human on 2017-07-07.
 */
exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World',
        userFullName: req.user ? req.user.fullName : ''
    });
};