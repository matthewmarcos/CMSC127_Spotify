(function(){
	angular
		.module("spotifyApp")
		.controller('IndexCtrl', IndexCtrl);
		
	IndexCtrl.$inject =["$scope", "$http", "$window"];
	
	function IndexCtrl($scope, $http, $window) {
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
				//attach data to rootscope
				console.log('received data: ' + data);
				$window.location.href = 'home';
				//redirect to (/home)
			}, function(err) {
				console.log(err);
				alert("Invalid Username/password combo.. or your account has not yet been approved!");
			});
		};

		$scope.logout = function() {
			$http.post('/auth/logout', {}).then(function(data){
				console.log("Successful logout");
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
				console.log("Successful SignUp");
				console.log(data);
				window.location = '/home';
			}, function(err) {
				console.log(err);
				alert("Invalid input");
			});
		};
	}
}());
