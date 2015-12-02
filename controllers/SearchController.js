/*
    ProfileController -> 
        Gets data about user 
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var async = require('async');


exports.find = function(req, res) {
	var query = req.params.query;
	var results = {};

pg.connect(dbUrl, function(err, client) {
	if(err) {
        return console.error('Client cannot connect to PG');
    }

	async.series([
		function(callback) {
			// console.log('Searching music');
			client.query("SELECT * FROM music natural join artist natural join album natural join album_contains_music where music_title like '%" + req.params.query +"%'",
                function(err, data){
                if(err) {
                    console.log('Error');
                    callback(err, null);
                    return;
                }
                results.music = data.rows;
                callback(null, data);
            });
			// callback(null, 'res1');
		}, function(callback) {
			// console.log('Searching playlist');
			client.query("SELECT * FROM playlist where playlistname like '%" + req.params.query +"%'",
                function(err, data){
                if(err) {
                    console.log('Error');
                    callback(err, null);
                    return;
                }
                results.playlists = data.rows;
                callback(null, data);
            });
			// callback(null, null);			
		}, function(callback) {
			// console.log('Searching artist');
			client.query("SELECT * FROM artist where artist_name like '%" + req.params.query +"%'",
                function(err, data){
                if(err) {
                    console.log('Error');
                    callback(err, null);
                    return;
                }
                results.artists = data.rows;
                callback(null, data);
            });
			// callback(null, null);			
		}, function(callback) {
			// console.log('Searching album');
			client.query("SELECT * FROM album natural join artist where album_name like '%" + req.params.query +"%'",
                function(err, data){
                if(err) {
                    console.log('Error');
                    callback(err, null);
                    return;
                }
                results.albums = data.rows;
                callback(null, data);
            });
			// callback(null, null);			
		}
	], function(err, data) {
		client.end();
		if(err) {
			res.sendStatus(err);
			return;
		}
		res.send(results);
	});
});

};

exports.findThis = function(req, res) {
    var query = req.params.query;
    var results = {};

pg.connect(dbUrl, function(err, client) {
    if(err) {
        return console.error('Client cannot connect to PG');
    } //edited
client.query("select album_name, artist_photo, music_title, times_played, music_id, artist_id, users_id, username, artist_name, file_path from artist natural join artist_create_music natural join album_contains_music natural join music natural join album natural join users where artist_name like '%" + req.params.query +"%' or music_title like '%" + req.params.query +"%' or album_name like '%" + req.params.query +"%'",
    function(err, data){
    if(err) {
        console.log('Error');
        res.sendStatus(err);
        return;
    }
    res.send(data.rows);
});
});

};