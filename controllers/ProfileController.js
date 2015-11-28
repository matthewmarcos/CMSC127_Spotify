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
        client.query("SELECT users_id, fname, lname, username, picture, email, isadmin, dateapproved FROM users WHERE users_id = $1", 
                    [req.session.user.users_id], function(err, data){
            client.end();
            if(err) {
                res.sendStatus(500);
                return;
            }
            res.send(data.rows[0]);
        });
    });
}

//Approve a user
exports.approve = function(req, res) {
    pg.connect(dbUrl, function(err, client) {
        if(err) {
            return console.error('Client cannot connect to PG');
        }
        // res.send('Updating at ' + req.params.id);
        client.query("UPDATE users SET isapproved = true WHERE users_id = $1", 
                    [req.params.id], function(err, data){
            client.end();
            if(err) {
                console.log('Error');
                return;
            }

            res.send('Successfully updated # ' + req.params.id);
        });
    });
};