/*
    ProfileController -> 
        Gets data about user 
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
}

//Approve a user
exports.addMusic = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
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

            res.send(data);
        });
    });
};