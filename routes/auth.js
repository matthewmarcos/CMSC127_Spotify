var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController')

/* GET home page. */
router.route('/login')
	.post();

module.exports = router;

