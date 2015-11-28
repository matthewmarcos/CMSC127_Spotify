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
}

exports.login = function(req, res){
	
};


exports.logout = function(req, res, next){
	
};
