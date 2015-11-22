// Seed.js
// This node program seeds the database with random data. Assumption: admin already exists

var pg = require('pg');
var async = require('async');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var data = require('./../models/seed').data;

var fakeQuery = function(string, callback) {
	callback(null, string);
};

	async.eachSeries(data, 
	function(datum, callback) {
		console.log(datum);
		callback(null);
	}, function(err) {
		console.log('Completed bitch');
	});