//http://stackful-dev.com/setting-up-nodejs-and-postgresql-on-ubuntu-servers.html
//createuser -P cmsc127spotify
//password: cmsc127
//createdb -O cmsc127spotify spotify
//psql -U cmsc127spotify -W spotify

//psql cmsc127spotify -h 127.0.0.1 -d spotify

//Dropping database:
//dropdb spotify
//createdb -O cmsc127spotify spotify
//psql -U cmsc127spotify -W spotify
//password: cmsc127
/*
	dbInit:
		Create tables if does not exist in schema.
		Creates admin account afterwards.
*/

var pg = require('pg');
var async = require('async');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var queryString = require('./../models/queries.js');

var deleter = function() {

	async.series([
		function(callback) {
            // create usrs table
            queryThis(queryString.drop_users, callback);
		},
		function(callback) {
            // Playlist
            queryThis(queryString.drop_playlist, callback);
		},
        function(callback) {
            // Playlist_tags
            queryThis(queryString.drop_playlist_tags, callback);
        },
        function(callback) {
            // Music
            queryThis(queryString.drop_music, callback);
        },
        function(callback) {
            // Artist
            queryThis(queryString.drop_artist, callback);
        },
        function(callback) {
            // Album
            queryThis(queryString.drop_album, callback);
        },
        function(callback) {
            // artist_create_music
            queryThis(queryString.drop_artist_create_music, callback);
        },
        function(callback) {
            // Album
            queryThis(queryString.drop_playlist_has_music, callback);
        },
        function(callback) {
            // artist_create_album
            queryThis(queryString.drop_artist_create_album, callback);
        },
        function(callback) {
            // album_contains_music
            queryThis(queryString.drop_album_contains_music, callback);
        },
        function(callback) {
            queryThis(queryString.drop_users_subscribes_playlist, callback);
        },
        function(callback) {
            queryThis(queryString.drop_users_recommends_music, callback);
        }
	],
	function(err, results) {
		disconnectAll();
	});
};


var disconnectAll = function() {
    console.log('disconnecting');
    pg.end();
};


var queryThis = function(query, onDone) {
    // console.log('Query finished');
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query(query, function(err, data){
            if(err) {
                console.log(err);
                // disconnectAll();
                onDone(err, data);
                return;
            }
            client.end();
            console.log('Query finished');
            onDone(null, data);
        });
    });
};

deleter();