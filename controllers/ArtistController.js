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
