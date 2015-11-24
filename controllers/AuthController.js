/*
	AuthController -> 
		Queries database for login 
*/

var pg = require('pg');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var bCrypt = require('bcrypt-nodejs');
var async = require('async');

var isValidPassword = function(userInput, password){
	return bCrypt.compareSync(userInput, password);
};


// Generates hash using bCrypt
var createHash = function(password){
	return bCrypt.hashSync(password);
};


exports.login = function(req, res){
	// expect username, password
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("SELECT * FROM users WHERE username = $1 and password = $2", 
        			[req.body.username, req.body.password] function(err, data){
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


exports.logout = function(req, res, next){
	//destroy session, scram.
	req.session.destroy(function(err) {
	  	res.redirect('/');
	});
};
