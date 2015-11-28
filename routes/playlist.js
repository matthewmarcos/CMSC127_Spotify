var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var playlist = require('./../controllers/PlaylistController');

/* GET home page. */

router.route('/')
	.get(SessionAuth.isLoggedIn, playlist.getMine);

module.exports = router;
