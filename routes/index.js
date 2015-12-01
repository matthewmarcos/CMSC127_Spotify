var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var SearchController = require('./../controllers/SearchController');
/* GET home page. */
var multer = require('multer');
var upload = multer({dest: './uploads/'});

router.get('/', SessionAuth.isNotLoggedIn, function(req, res, next) {
  res.render('index');
});

router.get('/search/:query', SessionAuth.isLoggedInPage, SearchController.find);
router.get('/mediasearch/:query', SessionAuth.isLoggedInPage, SearchController.findThis);

router.get('/home/', SessionAuth.isLoggedInPage, function(req, res, next) {
  res.render('home');
});

// var upload = multer().single('avatar')

router.post('/upload', upload.single('thing'), function (req, res) {
  res.send(req.file);
})


module.exports = router;
