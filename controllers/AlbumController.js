/*
	ArtistController -> 
        get things by artist
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var async = require('async');


exports.getMusicByAlbum = function(req, res) {
    // console.log('Finding' + req.params.artist_id);
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("select " +
        "users_id, artist_id, music_id, album_id, artist_name, album_name, file_path, music_title, music_length, times_played, views, username " +
        "from music natural join artist_create_music natural join artist natural join album natural join users where album_id = $1",
        [req.params.album_id], function(err, data){ 
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


exports.getAlbumByArtist = function(req, res) {
    // console.log('Finding' + req.params.artist_id);
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("select * from album natural join artist where artist_id = $1",
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
};


exports.getAllAlbums = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("select album_name, count, album_id, artist_name, artist_id from album natural join artist natural join (select album_id, count(*) as count from artist natural join album natural join music natural join artist_create_music group by album_id) a",
        function(err, data){ 
            client.end();
            if(err) {
               console.log(err);
               res.sendStatus(err);
               return;
            }
            res.send(data.rows);
        });   
    });
};