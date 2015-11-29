var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var MusicController = require('./../controllers/MusicController');



/* GET home page. */
router.route('/')
	// Get list of your music
	.get(SessionAuth.isLoggedIn, MusicController.getMine)
	// Upload new music
	.post(SessionAuth.isLoggedIn, MusicController.addMusic);

router.route('/:id')
	//Download music with music_id
	.get(SessionAuth.isLoggedIn, MusicController.getThis);

router.route('*')
	.get(function(req, res, next) {
		res.sendStatus(404);
	});

module.exports = router;
