var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var playlist = require('./../controllers/PlaylistController');

/* GET home page. */

router.route('/')
	// Get all playlists created by user
	.get(SessionAuth.isLoggedIn, playlist.getMine)
	// Create new playlist
	.post(SessionAuth.isLoggedIn, playlist.createPlaylist);
router.route('/:id')
	// Get all playlist with playlist_id
	.get(/*SessionAuth.isLoggedIn,*/ playlist.findMusicByPlaylist)
	// Edit playlist with playlist_id
	.put(/*SessionAuth.isLoggedIn, */playlist.editPlaylist)
	.delete(/*SessionAuth.isLoggedIn, */playlist.deletePlaylist);
router.route('/subscribe/:playlist_id')
	// Subscribe to playlist with id
	.post(SessionAuth.isLoggedIn, playlist.subscribe)
	// Unsubscribe to playlist with id
	.delete(/*SessionAuth.isLoggedIn, */playlist.unsubscribe);


module.exports = router;
