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
        async.waterfall([
            function(callback) {
                client.query("SELECT COUNT(*) FROM users WHERE username = $1", 
                            [req.body.username], function(err, data){
                    if(err) {
                        console.log('Error');
                        // disconnectAll();
                        callback(err, null);
                        return;
                    }
                    callback(null, data);
                });
            },
            function(data, callback) {
                // res.send(data.rows[0].count);
                if(data.rows[0].count === '0') {
                    client.query("insert into users(fname, lname, username, password, picture, email,isApproved,isAdmin,dateApproved)" +
                        "VALUES($1, $2, $3, $4, $5, $6, false, false, now())", 
                        [req.body.fname, req.body.lname, req.body.username, createHash(req.body.password), req.body.picture, req.body.email],
                        function(err, data) {
                        if(err) {
                            console.log(err);
                            console.log('Error in creating new account')
                            callback(err, null);
                            return;
                        }
                        callback(null, data);
                    })
                }
            }
        ], function(err, data) {
            client.end();
            res.send(data);
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
