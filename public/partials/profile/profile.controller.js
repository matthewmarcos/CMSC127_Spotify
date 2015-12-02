'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ProfileCtrl", ProfileCtrl);

		ProfileCtrl.$inject = ["$scope","$http"];

		function ProfileCtrl($scope,$http){
			$scope.user = {};
	
			$http.get('/profile').then(function(data){
				$scope.user = data.data;				
				if($scope.user.picture === "NULL"){
					$scope.user.picture = "/img/image.png";
				}
			}, function(err) {
				console.log(err);
			});
		}


})();
