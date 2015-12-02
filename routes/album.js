var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var album = require('./../controllers/AlbumController');

/* GET home page. */
router.route('/artist/:artist_id')
	.get(SessionAuth.isLoggedIn, album.getAlbumByArtist);

router.route('/music/:album_id')
	.get(SessionAuth.isLoggedIn, album.getMusicByAlbum);

router.route('/')
	.get(SessionAuth.isLoggedIn, album.getAllAlbums);
module.exports = router;
