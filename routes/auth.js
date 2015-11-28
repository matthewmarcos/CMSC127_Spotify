var express = require('express');
var router = express.Router();
var AuthController = require('./../controllers/AuthController');
var SessionAuth = require('./../authentications/SessionAuth');

/* GET home page. */
router.route('/login')
	.post(SessionAuth.isNotLoggedIn, AuthController.login);
router.route('/create')
	.post(SessionAuth.isNotLoggedIn, AuthController.create);
router.route('/logout')
	.post(AuthController.logout)
module.exports = router;

