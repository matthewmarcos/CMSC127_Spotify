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


exports.create = function(req, res) {
	pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("SELECT COUNT(*) FROM users WHERE username = $1", 
        			[req.body.username], function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                disconnectAll();
                onDone(err, data);
                return;
            }
            res.send(data.rows[0].count);
        });
    });
}

exports.login = function(req, res){
	// expect username, password
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        client.query("SELECT * FROM users WHERE username = $1", 
        			[req.body.username], function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                disconnectAll();
                onDone(err, data);
                return;
            }
            if(data.rows.length >= 1 && isValidPassword(req.body.password, data.rows[0].password)) {
            	var user = {};

            	user.fname = data.rows[0].fname;
            	user.lname = data.rows[0].lname;
            	user.username = data.rows[0].username;
            	user.picture = data.rows[0].picture;
            	user.isapproved = data.rows[0].isapproved;
            	user.isadmin = data.rows[0].isadmin;
            	user.dateapproved = data.rows[0].dateapproved;
            	req.session.user = user;
            	res.send(req.session);

            } else {
            	res.sendStatus(404);
            }
        });
    });

};


exports.logout = function(req, res, next){
	//destroy session, scram.
	req.session.destroy(function(err) {
        if(err) {
            throw err;
        }
	  	res.redirect('/');
	});
};
