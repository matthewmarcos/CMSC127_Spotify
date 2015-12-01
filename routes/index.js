var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var SearchController = require('./../controllers/SearchController');
/* GET home page. */

router.get('/', SessionAuth.isNotLoggedIn, function(req, res, next) {
  res.render('index');
});

router.get('/search/:query', SessionAuth.isLoggedInPage, SearchController.find);
router.get('/mediasearch/:query', /*SessionAuth.isLoggedInPage,*/ SearchController.findThis);

router.get('/home/', SessionAuth.isLoggedInPage, function(req, res, next) {
  res.render('home');
});

module.exports = router;
