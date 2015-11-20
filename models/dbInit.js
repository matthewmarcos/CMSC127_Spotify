// http://stackful-dev.com/setting-up-nodejs-and-postgresql-on-ubuntu-servers.html

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

	// async.series([
		// ]);
	createUser(disconnectAll);

	// testDate(function() {
	// 	testTable(disconnectAll);
	// });

};


var createUser = function(onDone) {
	pg.connect(dbUrl, function(err, client) {
		client.query(queryString.user_string, function(err, data){
			if(err) {
				console.log(err);
			}
			onDone();
		});
    });
};


var testDate = function(onDone) {
    pg.connect(dbUrl, function(err, client) {
        client.query("SELECT NOW() as when", function(err, result) {
            console.log("Row count: %d",result.rows.length);  // 1
            console.log("Current year: %d", result.rows[0].when.getFullYear());

            onDone();
        });
    });
};


var disconnectAll = function() {
    pg.end();
};


function testTable(onDone) {
    pg.connect(dbUrl, function(err, client) {
        client.query("CREATE TEMP TABLE IF NOT EXISTS reviews(id SERIAL, author VARCHAR(50), content TEXT)");
        client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
            	["mad_reviewer", "I'd buy this any day of the week!!11"]);
        client.query("INSERT INTO reviews(author, content) VALUES($1, $2)",
            	["calm_reviewer", "Yes, that was a pretty good product."]);
        client.query("SELECT * FROM reviews", function(err, result) {
            console.log("Row count: %d",result.rows.length);  // 1
            for (var i = 0; i < result.rows.length; i++) {
                var row = result.rows[i];
                console.log("id: " + row.id);
                console.log("author: " + row.author);
                console.log("content: " + row.content);
            }
            onDone();
        });
    });
}