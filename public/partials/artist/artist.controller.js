'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ArtistCtrl", ArtistCtrl);

		ArtistCtrl.$inject = ["$scope","$http"];

		function ArtistCtrl($scope,$http){
			$scope.artists = [];

			$http.get('/artist')
				.then(function(data) {
					$scope.artists = data.data;
				}, function(err) {
					console.err(err);
				});
				
		}


})();
