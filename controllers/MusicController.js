/*
    ProfileController -> 
        Gets data about user 
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var async = require('async');

//Get all music details of all music current user uploaded
exports.getMine = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) { 
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("SELECT * from music where users_id = $1", 
                    [req.session.user.users_id], function(err, data){
            client.end();
            if(err) {
                res.sendStatus(500);
                return;
            }
            res.send(data.rows);
        });
    });
};

exports.popular = function(req, res) {
// select * from music order by times_played desc LIMIT 10
    console.log('Getting the popular shizz');
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("select * from music order by times_played desc LIMIT 10", 
            function(err, data){
                client.end();
                if(err) {
                    res.sendStatus(500);
                    return;
            }
            res.send(data.rows);
        });
    });
};

//Retrieve a particular song given a music_id
exports.getThis = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        async.waterfall([
            function(callback) {
                client.query("SELECT file_path from music where music_id = $1", 
                            [Number(req.params.music_id)], function(err, data){
                    client.end();
                    if(err) {
                        callback(err, null);                        
                        return;
                    }
                    callback(null, data);
                });
            }, function(data, callback) {
                // Use multer to send music on that filepath
                // res.send(data.rows);            
                res.send(data.rows[0]);
            }
        ], function(err, data) {
            if(err) {
                res.sendStatus(404);
            }
        });
        
    });
};


exports.addMusic = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        console.log('adding' + req.body);
        // res.send('Updating at ' + req.params.id);
        //Complicated query involving multer and file storage.
        client.query("INSERT INTO music (music_title, file_path, music_length, users_id) " +
            "VALUES($1, $2, $3, $4)", 
            [req.body.music_title, "tempPath", req.body.music_length, req.session.user.users_id], 
            function(err, data){
            client.end();
            if(err) {
                console.error(err);
                res.sendStatus(409);
                return;
            }
            res.send({"msg":"hi"});
        });
    });
};


exports.recommend = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }

        async.waterfall([
            function(callback) {
                client.query("SELECT COUNT(*) FROM users_recommends_music where music_id = $1 AND users_id = $2",
                    [req.params.music_id, req.session.user.users_id],
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
                    client.query("INSERT INTO users_recommends_music (music_id, users_id) VALUES ($1, $2)",
                        [req.params.music_id, req.session.user.users_id],
                        function(err, data) {
                        if(err) {
                            console.log(err);
                            console.log('Error recommending music ' + req.params.music_id);
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





exports.incrementTimesPlayed = function(req, res) {
    // Waterfall
    // Check if it exists
    // Get current Views
    // Increment then update (music_id)
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }

        async.waterfall([
            function(callback) {
                client.query("SELECT * FROM music where music_id = $1",
                    [req.params.music_id],
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
                if(data.rows.length> 0) {
                    var views = data.rows[0].times_played;
                    views++;
                    // console.log('Incrementing views of ' + data.rows[0].views);
                    client.query("UPDATE music SET times_played = $1 where music_id = $2",
                        [views, req.params.music_id],
                        function(err, data) {
                        if(err) {
                            console.log(err);
                            console.log('Error incrementing views music ' + req.params.music_id);
                            callback(err, null);
                            return;
                        }
                        callback(null, data);
                    });
                    // callback(null, data);
                } else {
                    //User is already subscribed to playlist
                    callback(404, null)
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

