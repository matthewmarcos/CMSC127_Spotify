var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
/* GET home page. */

router.get('/', SessionAuth.isNotLoggedIn, function(req, res, next) {
  res.render('index');
});

router.get('/home/', SessionAuth.isLoggedInPage, function(req, res, next) {
  res.render('home');
});

module.exports = router;
