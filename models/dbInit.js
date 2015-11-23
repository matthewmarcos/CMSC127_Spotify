// http://stackful-dev.com/setting-up-nodejs-and-postgresql-on-ubuntu-servers.html
// createuser -P cmsc127spotify
// password: cmsc127
// createdb -O cmsc127spotify spotify
// psql -U cmsc127spotify -W spotify

// Dropping database:
// dropdb spotify
// createdb -O cmsc127spotify spotify
// psql -U cmsc127spotify -W spotify
// password: cmsc127
/*
	dbInit:
		Create tables if does not exist in schema.
		Creates admin account afterwards.
*/

var pg = require('pg');
var async = require('async');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var queryString = require('./queries.js');

module.exports = function() {

	async.series([
		function(callback) {
            // create usrs table
            queryThis(queryString.users, callback);
		},
        function(callback) {
            //Create users_name table
            queryThis(queryString.users_name, callback);
        },
		function(callback) {
            // Playlist
            queryThis(queryString.playlist, callback);
		},
        function(callback) {
            // Playlist_tags
            queryThis(queryString.playlist_tags, callback);
        },
        function(callback) {
            // Music
            queryThis(queryString.music, callback);
        },
        function(callback) {
            // Artist
            queryThis(queryString.artist, callback);
        },
        function(callback) {
            // Album
            queryThis(queryString.album, callback);
        },
        function(callback) {
            // artist_create_music
            queryThis(queryString.artist_create_music, callback);
        },
        function(callback) {
            // Album
            queryThis(queryString.playlist_has_music, callback);
        },
        function(callback) {
            // artist_create_album
            queryThis(queryString.artist_create_album, callback);
        },
        function(callback) {
            // album_contains_music
            queryThis(queryString.album_contains_music, callback);
        },
        function(callback) {
            queryThis(queryString.users_subscribes_playlist, callback);
        },
        function(callback) {
            searchAdmin(callback);
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
                console.log('Error');
                disconnectAll();
                onDone(err, data);
                return;
            }
            client.end();
            console.log('Query finished');
            onDone(null, data);
        });
    });
};


var searchAdmin = function(onDone) {
    pg.connect(dbUrl, function(err, client) {
        var number = client.query(queryString.get_admin_count);
        number.on('row', function(row) {
            if(row.count === '0') {
               console.log('Zero rows');
               createAdmin(onDone);
            } else {
                console.log('Not zero rows')
            }
        });
    });
};


var createAdmin = function(onDone) {
    async.series([
        function(callback) {
            console.log('Creating admin account');
            queryThis(queryString.insert_admin, callback);
        },
         function(callback) {
            // queryThis(queryString.insert_admin_name, callback);
        }
    ],
    function(err, results) {
        console.log('Finished queries');
    });
};