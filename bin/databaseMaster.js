/*
	databaseMaster:
		Create tables if does not exist in schema.
		Creates admin seed afterwards.
*/

var pg = require('pg');
var async = require('async');

module.exports = function() {

	var connString = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
	var client = new pg.Client(connString);

	client.connect(function(err) {

		async.waterfall([
			function(callback) {
				client.query('SELECT * from person;', function(err, data) {
					if(err) {
						callback(err);
					} else { 
						callback(null, data);
					}
				});
			},
			function(data, callback) {
				// console.log('rows');
				callback(null, data);
			}
		], function(err, data) {
			console.log(data.rows);
			console.log('Data Retrieved successfully.');
			client.end();
		});
	});
};
