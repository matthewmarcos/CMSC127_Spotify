/*
	AuthController -> 
		Queries database for login 
*/


// var models = require('../models');
var models;
var bCrypt = require('bcrypt-nodejs');

var isValidPassword = function(userInput, password){
		return bCrypt.compareSync(userInput, password);
};


// Generates hash using bCrypt
var createHash = function(password){
	return bCrypt.hashSync(password);
};


exports.login = function(req, res, next){
	// expect username, password
	models.users.findAll({
		// Where username == username
			where: {
				username: req.body.username
			}
		})
		.then(function(accounts){
			// If account exists and password is valid
			if(accounts.length > 0
				&& isValidPassword(req.body.password, accounts[0].password)) {
			// Defining session variables
				req.session.isAdmin = accounts[0].isAdmin,
				req.session.user = accounts[0].isValidated,
				req.session.id = accounts[0].userName
				res.redirect('/');
//				res.send(req.session);
			} else {
				//If account is not found
				res.sendStatus(404);
			}
		});
};


exports.logout = function(req, res, next){
	//destroy session, scram.
	req.session.destroy(function(err) {
	  	res.redirect('/');
	});
};
