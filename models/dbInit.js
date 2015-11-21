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
	databaseMaster:
		Create tables if does not exist in schema.
		Creates admin seed afterwards.
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
        }
	],
	function(callback) {
		disconnectAll();
	});
};


var disconnectAll = function() {
    pg.end();
};


var queryThis = function(query, onDone) {
    pg.connect(dbUrl, function(err, client) {
        client.query(query, function(err, data){
            if(err) {
                console.log(err);
                disconnectAll();
                onDone(err, data);
            }
            onDone(null, data);
        });
    });
};

// //Insert First name and last name to admin user_name
// var insertName = function(onDone) {
//     pg.connect(dbUrl, function(err, client) {
//         client.query(queryString.insert_user, function(err, data){
//             if(err) {
//                 console.log(err);
//                 onDone(err, data);
//             }
//             onDone(null, data);
//         });
//     });
// };


// //Insert admin account credentials
// var adminSeed = function(onDone) {
//     pg.connect(dbUrl, function(err, client) {
//         client.query(queryString.insert_admin, function(err, data){
//             if(err) {
//                 console.log(err);
//                 onDone(err, data);
//             }
//             onDone(null, data);
//         });
//     });
// };

// //Create user_name table
// var createUsersName = function(onDone) {
//     pg.connect(dbUrl, function(err, client) {
//         client.query(queryString.users_name, function(err, data){
//             if(err) {
//                 console.log(err);
//                 onDone(err, data);
//             }
//             onDone(null, data);
//         });
//     });
// };

// var createUser = function(onDone) {
// 	pg.connect(dbUrl, function(err, client) {
// 		client.query(queryString.users, function(err, data){
// 			if(err) {
// 				console.log(err);
//                 onDone(err, data);
// 			}
// 			onDone(null, data);
// 		});
//     });
// };


// var testDate = function(onDone) {
//     pg.connect(dbUrl, function(err, client) {
//         client.query("SELECT NOW() as when", function(err, result) {
//             console.log("Row count: %d",result.rows.length);  // 1
//             console.log("Current year: %d", result.rows[0].when.getFullYear());

//             onDone();
//         });
//     });
// };





// function testTable(onDone) {
//     pg.connect(dbUrl, function(err, client) {
//         client.query("CREATE TEMP TABLE IF NOT EXISTS reviews(id SERIAL, author VARCHAR(50), content TEXT)");
//         client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
//             	["mad_reviewer", "I'd buy this any day of the week!!11"]);
//         client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
//             	["calm_reviewer", "Yes, that was a pretty good product."]);
//         client.query("SELECT * FROM reviews", function(err, result) {
//             console.log("Row count: %d",result.rows.length);  // 1
//             for (var i = 0; i < result.rows.length; i++) {
//                 var row = result.rows[i];
//                 console.log("id: " + row.id);
//                 console.log("author: " + row.author);
//                 console.log("content: " + row.content);
//             }
//             onDone();
//         });
//     });
// }
