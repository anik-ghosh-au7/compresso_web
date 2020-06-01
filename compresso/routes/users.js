var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');

router.get('/login', function(req, res, next) {
  if (req.query.success) {
    res.render('login', {success: true});
  } else {
    res.render('login', {success: false});
  }
});

router.post('/login', userController.login);

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', userController.signup);

module.exports = router;