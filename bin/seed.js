// Seed.js
// This node program seeds the database with random data. Assumption: admin already exists

var pg = require('pg');
var async = require('async');
var dbUrl = "postgres://cmsc127spotify:cmsc127@localhost/spotify";
var queries = require('./../models/seed').queries;
var i = 0;

var fakeQuery = function(string, callback) {
	callback(null, string);
};

	// queries.forEach(function(queryString) {
	//     pg.connect(dbUrl, function(err, client) {
	//         if(err) {
	//             return console.error('Client cannot connect to PG');
	//         }
	//         // res.send('Updating at ' + req.params.id);
	//         client.query(queryString, function(err, data){
	//             client.end();
	//             if(err) {
	//                 console.log('Error');
	//                 return;
	//             }
	//         });
	//     });  

	// });

	async.eachSeries(queries, 
	function(queryString, callback) {
		i++;
		pg.connect(dbUrl, function(err, client) {
	        if(err) {
	            return console.error('Client cannot connect to PG');
	        }
	        // res.send('Updating at ' + req.params.id);
	        client.query(queryString, function(err, data){
	            client.end();
	            if(err) {
	                console.log('Error' + i);
	                // callback(err);
	                // return;
	            }
	            callback(null);
	        });
	    });  
	}, function(err) {
		console.log('Completed bro');
	});
