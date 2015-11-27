var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
/* GET home page. */

router.get('/', SessionAuth.isNotLoggedIn, function(req, res, next) {
  res.render('index');
});

router.get('/login', SessionAuth.isNotLoggedIn, function(req, res, next) {
  res.render('login');
});

module.exports = router;


