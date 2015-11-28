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
	res.send([{name: "iPlaylist"}, {name: "iPlaylist2"}, {name: "iPlaylist3"}]);
}

exports.login = function(req, res){
	
};


exports.logout = function(req, res, next){
	
};
