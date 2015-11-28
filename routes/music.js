var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var MusicController = require('./../controllers/MusicController');



/* GET home page. */
router.route('/')
	.get(SessionAuth.isLoggedIn, MusicController.getMine)
	.post(SessionAuth.isLoggedIn, MusicController.addMusic);

router.route('/:id')
	.get(SessionAuth.isLoggedIn, function(req, res){});

router.route('*')
	.get(function(req, res, next) {
		res.sendStatus(404);
	});

module.exports = router;
