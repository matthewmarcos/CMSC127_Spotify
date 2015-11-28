var express = require('express');
var router = express.Router();
var ProfileController = require('./../controllers/ProfileController');
var SessionAuth = require('./../authentications/SessionAuth');
/* GET home page. */

// Return logged in user's own profile
router.route('/')
	.get(SessionAuth.isNotLoggedIn, function(){});

// Approve a user
router.route('/approve/:id')
	.put(SessionAuth.isAdmin, ProfileController.approve); 

router.get('/home', SessionAuth.isLoggedInPage, function(req, res, next) {
	res.render('home');
});

router.get('*', SessionAuth.isLoggedInPage, function(req, res, next) {
	res.redirect('/home');
});

module.exports = router;
