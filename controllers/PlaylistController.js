/*
	PlaylistController -> 
		Queries and creates playlists 
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var async = require('async');

// Generates hash using bCrypt
var createHash = function(password){
	return bCrypt.hashSync(password);
};


exports.getMine = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("SELECT * FROM playlist WHERE users_id = $1",
        	[req.session.user.users_id],
        	function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                return;
            }
            res.send(data.rows);
        });
    });  
};


exports.getThis = function(req, res) {
    // Get list of songs in playlist_id
    // Select * from music natural join playlist_has_music where playlist_id = Number(req.params.id);
}


exports.create = function(req, res) {
    // Create a new playlist for users_id
    // Add songs
};


exports.edit = function(req, res) {
    // Edit playlist of users_id with playlist_id
    // delete from playlist_has_songs with playlist_id
    // add again to playlist_has_songs
    // async.EachSeries
};
