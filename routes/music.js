var express = require('express');
var router = express.Router();
var tokenizer = require('./../controllers/AuthController');
var SessionAuth = require('./../authentications/SessionAuth');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
  		"I am a matt"
  	);
});

router.route('/something/:id')
	.get(function(req, res, next) {
		res.send(req.params.id);
	});

router.route('*')
	.get(function(req, res, next) {
		res.sendStatus(404);
	});

module.exports = router;
