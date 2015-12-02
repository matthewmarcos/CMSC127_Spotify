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
        client.query("SELECT * from music NATURAL JOIN playlist_has_music NATURAL JOIN artist NATURAL JOIN album where playlist_id = $1",
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


exports.createPlaylist = function(req, res) {
    // Create a new playlist for users_id
    // Add songs eachSeries]
    // console.log(req.body);
    var playlist_id;

    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        async.waterfall([
            function(callback) {
                console.log(1);
                client.query("INSERT INTO playlist (users_id, playlist_pic, playlistname, date_created) VALUES" +
                    "($1, $2, $3, now())",
                    [req.session.user.users_id, "img/project4.jpg", req.body.playlist_name],
                    function(err, data){
                    if(err) {
                        console.log('Error1');
                        console.error( err);
                        callback(err, false);
                        return;
                    }
                    console.log(data);
                    callback(null, data);
                });
            },
            function(data, callback){
                console.log(2);               
                client.query("SELECT lastval()", 
                    function(err, data){
                    if(err) {
                        console.log('Error2');
                        console.error(err);
                        callback(err, null)
                        return;
                    }
                    playlist_id = Number(data.rows[0].lastval);
                    callback(null, data);
                });              
                 
            }, function(data, callback) {
                console.log(3);
                async.eachSeries(req.body.music_ids, 
                    function(music_id, cb) {
                        console.log(music_id);
                        client.query("INSERT INTO playlist_has_music (playlist_id, music_id) VALUES ($1, $2)", 
                            [playlist_id, music_id],
                            function(err, data){
                            if(err) {
                                console.log('Error: ' + music_id);
                                cb(err);
                                return;
                            }
                            cb(null);
                        });
                        // callback(null);
                    }, function(err, data) {
                        if(err) {
                            callback(err, null);
                            return;
                        }
                        callback(null, data);
                    }
                );
              }  
            ], function(err, data) {
                client.end();
                if(err) {
                    res.sendStatus(err);
                } else {
                    res.send(data);
                }
            }
        );

    });    
};


exports.deletePlaylist = function(req,res) {

    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        async.waterfall([
            function(callback) {
                client.query("SELECT COUNT(*) FROM playlist where playlist_id = $1 and users_id = $2",
                    [req.params.id, req.session.user.users_id],
                    function(err, data){
                    if(err) {
                        console.log('Error1');
                        console.error( err);
                        callback(err, null);
                        return;
                    }
                    console.log(data);
                    callback(null, data);
                });
            },
            function(data, callback) {
                if(Number(data.rows[0].count) === 0) {
                    callback({message: 'Playlist not found'}, null);
                    return;
                }

                client.query("DELETE FROM playlist_has_music where playlist_id = $1",
                    [req.params.id],
                    function(err, data){
                    if(err) {
                        console.log('Error1');
                        console.error( err);
                        callback(err, null);
                        return;
                    }
                    console.log(data);
                    callback(null, data);
                });
            },
            function(data, callback) {
                client.query("DELETE FROM playlist where playlist_id = $1",
                    [req.params.id],
                    function(err, data){
                    if(err) {
                        console.log('Error1');
                        console.error( err);
                        callback(err, null);
                        return;
                    }
                    console.log(data);
                    callback(null, data);
                });
            }
            ], function(err, data) {
                client.end();
                if(err) {
                    res.sendStatus(err);
                } else {
                    res.send(data);
                }
            }
        );
    });

};

exports.editPlaylist = function(req, res) {
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

};

exports.findMusicByPlaylist = function(req, res) {
     pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("select * from music natural join playlist natural join playlist_has_music natural join artist_create_music natural join artist where playlist_id = $1",
            [req.params.id],
            function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                res.sendStatus(err);
                return;
            }
            res.send(data.rows);
        });
    });  
};