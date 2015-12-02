'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("AlbumViewCtrl", AlbumViewCtrl);

		AlbumViewCtrl.$inject = ["$scope","$http", "$routeParams"];

		function AlbumViewCtrl($scope,$http,$routeParams){
			$scope.albumView = [];

			$http.get('/album/music/'  + $routeParams.album_id)
				.then(function(data) {
					console.log(data.data);
					/*$scope.albumView = data.data;*/
				}, function(err) {
					console.err(err);
				});		
		}
})();
