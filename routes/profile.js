var express = require('express');
var router = express.Router();
var ProfileController = require('./../controllers/ProfileController');
var SessionAuth = require('./../authentications/SessionAuth');
/* GET home page. */

// Return logged in user's own profile
router.route('/')
	.get(SessionAuth.isLoggedIn, ProfileController.getMine);
// View pending accounts
router.route('/pending')
	.get(SessionAuth.isAdmin, ProfileController.getPending);
// View approved accounts
router.route('/approved')
	.get(SessionAuth.isAdmin, ProfileController.getApproved);
// Approve a user
router.route('/approve/:id')
	.put(SessionAuth.isAdmin, ProfileController.approve); 

module.exports = router;
