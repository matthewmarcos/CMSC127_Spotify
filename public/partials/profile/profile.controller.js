'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ProfileCtrl", ProfileCtrl);

		ProfileCtrl.$inject = ["$scope","$http"];

		function ProfileCtrl($scope,$http){
			$scope.username = '';
			$scope.picture = '';
			$scope.isadmin = false;
	
			$http.get('/profile').then(function(data){
				// alert('getinfo');
				// console.log(data.data.username);
				$scope.username = data.data.username;
				$scope.picture = data.data.picture;
				$scope.isadmin = data.data.isadmin;

			}, function(err) {
				console.log(err);
			});
		}


})();
