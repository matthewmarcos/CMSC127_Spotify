'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("AlbumViewCtrl", AlbumViewCtrl);

		AlbumViewCtrl.$inject = ["$scope","$http", "$routeParams"];

		function AlbumViewCtrl($scope, $http, $routeParams){
			$scope.albumView = [];
			$scope.albumName = '';
			$http.get('/album/music/'  + $routeParams.album_id)
				.then(function(data) {
					$scope.albumView = data.data;
					$scope.albumName = $scope.albumView[0].album_name;
				}, function(err) {
					console.log(err);
				});		
		}
})();
