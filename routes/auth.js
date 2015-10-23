var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/login')
	.post(function(req, res, next) {
		res.send('login route');
	});

module.exports = router;

