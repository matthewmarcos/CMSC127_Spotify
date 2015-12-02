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
		$scope.inputFile = '';

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
				window.location = '/';
				console.log("Not logged in");
			});
		}

		$scope.signup = function() {
			alert($scope.inputFile);
			if(!($scope.inputFName) ){
				alert('Invalid Credentials');
				return;
			}

			if(!($scope.inputLName) ){
				alert('Invalid Credentials');
				return;
			}

			if(!($scope.inputUsernameSignUp) ){
				alert('Invalid Credentials');
				return;
			}

			if(!($scope.inputPasswordSignUp) ){
				alert('Invalid Credentials');
				return;
			}

			if(!($scope.inputConfirmPassword) ){
				alert('Invalid Credentials');
				return;
			}

			if(!($scope.inputEmail) ){
				alert('Invalid Credentials');
				return;
			}

			if(($scope.inputPasswordSignUp)!==($scope.inputConfirmPassword)){
				alert('Password does not match');
				return;
			}


			$http.post('/auth/create', {
				fname: $scope.inputFName,
				lname: $scope.inputLName,
				username: $scope.inputUsernameSignUp,
				password: $scope.inputPasswordSignUp,
				picture: 'NULL',
				email: $scope.inputEmail
			}).then(function(data){
				alert("Sign up successful! please to be approved by admin");
				console.log("Successful Sign Up");
				console.log(data);
				window.location = '/home';
			}, function(err) {
				console.log(err);
				alert("Invalid input");
			});
		};
	}
}());
