/**
 * Created by human on 2017-07-07.
 */
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello World useing EJS'
    });
};