
//$rootscope use for login
/*app.controller('authController', ['$scope', '$http', '$location', function($scope, $http, $location) {

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

}]);*/

	(function(){
		angular
			.module("spotifyApp", ["ngRoute"])
			.config(config);

		config.$inject =["$routeProvider"];

		function config($routeProvider){
			$routeProvider
				.when('/login', {
					'controller': "LoginCtrl",
					'templateUrl$' : "/partials/login/login.view.html"
				})
				.otherwise({
					'controller' : "HomeCtrl",
					'templateUrl' : "/partials/home/home.view.html"
				});
		}
	}());
