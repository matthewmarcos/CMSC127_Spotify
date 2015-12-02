/*
	ArtistController -> 
        get things by artist
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var async = require('async');

exports.getAll = function(req, res) {
    //Find all music with artist_id id
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
     	 client.query("SELECT * FROM artist", function(err, data){ 
            if(err) {
               console.log('Error');
                // disconnectAll();
               res.sendStatus(404);
               return;
            }
            res.send(data.rows);
        });   
    });
};


exports.getAllByArtist = function(req, res) {
    // console.log('Finding' + req.params.artist_id);
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("select " +
        "users_id, artist_id, music_id, artist_name, album_id, album_name, music_title, music_length, times_played, views, username " +
        "from music natural join artist_create_music natural join album natural join users natural join artist where artist_id = $1",
        [req.params.artist_id], function(err, data){ 
            client.end();
            if(err) {
               console.log(err);
               res.sendStatus(err);
               return;
            }
            res.send(data.rows);
        });   
    });
}