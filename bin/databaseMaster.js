/*
	databaseMaster:
		Create tables if does not exist in schema.
		Creates admin seed afterwards.
*/

var pg = require('pg');
module.exports = function() {

	var conString = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
	var client = new pg.Client(conString);

	client.connect(function(err) {

		if(err) {
			return console.error('could not connect to postgres', err);
		}
		
		client.query('SELECT NOW() AS "theTime"', function(err, result) {
			if(err) {
				return console.error('error running query', err);
			}
			console.log(result.rows[0].theTime);
			//output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
			console.log('Database connection successful');
			client.end();
		});

		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.query();
		// client.end();

	});
};
