(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
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

		$scope.login = function() {
			console.log("username: " + $scope.inputUsername);
			console.log("Password: " + $scope.inputPassword);
			$http.post('/auth/login', {
				username: $scope.inputUsername,
				password: $scope.inputPassword
			}).then(function(data){
				console.log("Successful login")
				console.log(data);
				//attach data to rootscope
				// $window.location.href = 'home';
				//redirect to (/home)
				window.location = '/home';

			}, function(err) {
				console.log(err);
				
				
			});
		};

		$scope.logout = function() {
			$http.post('/auth/logout', {}).then(function(data){
				console.log("Successful logout");
				console.log(data);
				//delete data in rootscope
				// $window.location.href = 'home';
				//redirect to (/home)
				window.location = '/';

			}, function(err) {
				console.log("Not logged in");
			});
		}
	};
	

}());
