var app = angular.module('mattifyApp', []);

app.controller('authController', function($scope) {
	$scope.user = {
		username = '',
		password = '',
		email = '',
		firstname = '',
		lastname = ''
	};

	$scope.printData = function() {
		alert($scope.user.username);
	}

});