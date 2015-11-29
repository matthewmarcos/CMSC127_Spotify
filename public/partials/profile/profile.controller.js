'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ProfileCtrl", ProfileCtrl);

		ProfileCtrl.$inject["$scope","$http"];

		function ProfileCtrl($scope,$http){
			$scope.username = '';
			$scope.picture = '';
	
			$http.get('/profile').then(function(data){
				alert('getinfo');
				$scope.username = data.username;
				$scope.picture = data.picture;
			}, function(err) {
				console.log(err);
			});
		}


})();
