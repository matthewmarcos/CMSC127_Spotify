var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var artist = require('./../controllers/ArtistController');

/* GET home page. */
router.route('/')
	.get(SessionAuth.isLoggedIn, artist.getAll);

router.route('/music/:artist_id')
	.get(SessionAuth.isLoggedIn, artist.getAllByArtist);

module.exports = router;
