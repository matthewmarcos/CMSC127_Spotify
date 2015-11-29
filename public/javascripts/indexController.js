(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
		/*
		.run(function($rootScope) {
			//console.log('lol');
			$rootScope.username = '';
		});
		*/	
		.controller('IndexCtrl', IndexCtrl);
		
	IndexCtrl.$inject =["$scope", "$http", "$window","$rootScope"];
	
	function IndexCtrl($scope, $http, $window, $rootScope) {
		$scope.newUser = {
			"username": "",
			"password": "",
			"fname": "",
			"lname": "",
			"email": "",
		};

		$scope.inputUsername = '';
		$scope.inputPassword = '';

		$scope.inputUsernameSignUp = '';
		$scope.inputPasswordSignUp = '';
		$scope.inputFName = '';
		$scope.inputLName = '';
		$scope.inputEmail = '';
		$scope.inputConfirmEmail = '';
		$scope.inputConfirmPassword = '';
		$scope.inputPassword = '';

		$scope.login = function() {
			console.log("username: " + $scope.inputUsername);
			console.log("Password: " + $scope.inputPassword);
			$http.post('/auth/login', {
				username: $scope.inputUsername,
				password: $scope.inputPassword
			}).then(function(data){
				console.log("Successful login")
				console.log(data);
							alert('HAHA');
				//attach data to rootscope
//				$rootScope.username = $scope.inputUsername;
				// $window.location.href = 'home';
				//redirect to (/home)
				window.location = '/home';

			}, function(err) {
				console.log(err);
				alert("Invalid Username/password combo.. or your account has not yet been approved!");
			});
		};

		$scope.logout = function() {
			$http.post('/auth/logout', {}).then(function(data){
				console.log("Successful logout");
				console.log(data);
				//delete data in rootscope
				alert('huhu');
//				$rootScope.username = "";
				// $window.location.href = 'home';
				//redirect to (/home)
				window.location = '/';

			}, function(err) {
				console.log("Not logged in");
			});
		}

		$scope.signup = function() {
			$http.post('/auth/create', {
				fname: $scope.inputFName,
				lname: $scope.inputLName,
				username: $scope.inputUsernameSignUp,
				password: $scope.inputPasswordSignUp,
				picture: 'NULL',
				email: $scope.inputEmail
			}).then(function(data){
				console.log("Successful SignUp")
				console.log(data);
				alert('HAHA');
				window.location = '/home';
			}, function(err) {
				console.log(err);
				alert("Invalid input");
			});
		};
	}
}());
