const User = require('../model/user.model');

exports.signup = (req, res) => {
    const entry = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    entry.save((err) => {
        if (err) {
            console.log(err);
            res.status(406).send(err.message);
            // res.redirect('/users/login');
        } else {
            res.redirect('/users/login?success=true');
        }
    })
}

exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    User.findOne(user, (err, user) => {
        if (err || !user) {
            res.render('invalidLogin');
            return
        }
        req.session.user = user;
        res.render('mainPage');
    })
}