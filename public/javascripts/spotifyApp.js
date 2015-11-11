var app = angular.module('spotifyApp',['ngRoute']);


//$rootscope use for login
app.controller('authController', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$scope.user = {
		lastName : '',
		firstName : '',
		userName : '',
		email : '',
		confirmEmail: '',
		password : '',
		confirmPassword : ''
	};

	$scope.showMe = function() {
		//escape strings
	};

}]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'authController'
      });
  }]);

