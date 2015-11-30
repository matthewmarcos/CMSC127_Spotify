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

router.route('/popular')
	//Get top 10 music with most views
	.get(SessionAuth.isLoggedIn, MusicController.popular);
router.route('/recommend/:music_id')
	//Download music with music_id
	.post(SessionAuth.isLoggedIn, MusicController.recommend);
router.route('/:id')
	//Download music with music_id
	.get(SessionAuth.isLoggedIn, MusicController.getThis);



router.route('*')
	.get(function(req, res, next) {
		res.sendStatus(403);
	});

module.exports = router;
