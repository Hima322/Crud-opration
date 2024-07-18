const axios = require('axios');

exports.homeRoutes = (req, res) => {
    res.render('index', { user: "new data" });
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    res.render('update_user');
}
