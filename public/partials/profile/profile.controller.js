'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ProfileCtrl", ProfileCtrl);

		ProfileCtrl.$inject = ["$scope","$http"];

		function ProfileCtrl($scope,$http){
			$scope.user = {};
	
			$http.get('/profile').then(function(data){
				// alert('getinfo');
				console.log(data.data);
				$scope.user = data.data;

			}, function(err) {
				console.log(err);
			});
		}


})();
