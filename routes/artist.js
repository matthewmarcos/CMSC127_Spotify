var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var artist = require('./../controllers/ArtistController');

/* GET home page. */

router.route('/:id')
	.get(SessionAuth.isLoggedIn, artist.getAll);

module.exports = router;
