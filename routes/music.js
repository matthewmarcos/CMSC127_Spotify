var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var MusicController = require('./../controllers/MusicController');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});



/* GET home page. */
router.route('/')
	// Get list of your music
	.get(SessionAuth.isLoggedIn, MusicController.getMine)
	// Upload new music
	.post(SessionAuth.isLoggedIn, upload.single('music'), MusicController.addMusic);
router.route('/popular')
	//Get top 10 music with most views
	.get(SessionAuth.isLoggedIn, MusicController.popular);
router.route('/recommend/:music_id')
	//Recommend music_id
	.post(SessionAuth.isLoggedIn, MusicController.recommend);
router.route('/:music_id')
	//Download music with music_id
	.get(SessionAuth.isLoggedIn, MusicController.getThis);
router.route('/views/:music_id')
	// Add 1 to views of song with id
	.put(SessionAuth.isLoggedIn, MusicController.incrementTimesPlayed);



router.route('*')
	.get(function(req, res, next) {
		res.sendStatus(403);
	});

module.exports = router;
