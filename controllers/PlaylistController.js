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
     pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("SELECT * from music NATURAL JOIN playlist_has_music where playlist_id = $1",
            [req.params.id],
            function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                return;
            }
            res.send(data.rows);
        });
    });  
}


exports.create = function(req, res) {
    // Create a new playlist for users_id
    // Add songs eachSeries
    var songs = req.body.songs;
};


exports.edit = function(req, res) {
    // Edit playlist of users_id with playlist_id
    // delete from playlist_has_songs with playlist_id
    // add again to playlist_has_songs
    // async.EachSeries
};

exports.subscribe = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }

        async.waterfall([
            function(callback) {
                client.query("SELECT COUNT(*) FROM users_subscribes_playlist where playlist_id = $1 AND users_id = $2",
                    [req.params.playlist_id, req.session.user.users_id],
                    function(err, data){
                    if(err) {
                        console.log('Error');
                        callback(err, null);
                        return;
                    }
                    callback(null, data);
                });
            },
            function(data, callback) {
                // Check if the user is already subscribed
                if(data.rows[0].count === '0') {
                    client.query("INSERT INTO users_subscribes_playlist (playlist_id, users_id) VALUES ($1, $2)",
                        [req.params.playlist_id, req.session.user.users_id],
                        function(err, data) {
                        if(err) {
                            console.log(err);
                            console.log('Error subscribing to playlist' + req.params.playlist_id);
                            callback(err, null);
                            return;
                        }
                        callback(null, data);
                    })
                } else {
                    //User is already subscribed to playlist
                    callback(409, null)
                }
            }
        ], function(err, data) {
            client.end();
            if(err) {
                res.sendStatus(err);
            } else {
                res.send(data);
            }
        });
    });  
};

exports.unsubscribe = function(req, res) {

}