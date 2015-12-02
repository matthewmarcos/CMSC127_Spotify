'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PlaylistViewCtrl", PlaylistViewCtrl);

		PlaylistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function PlaylistViewCtrl ($scope, $http, $routeParams) {
			$scope.tracks = [];
			$scope.ID = $routeParams.playlist_id;
			$scope.playlistName = '';
			$http.get('/playlist/' + $routeParams.playlist_id)
				.then(function(data) {
					$scope.tracks = data.data;
					$scope.playlistName = $scope.tracks[0].playlist_name;
					console.log('successfully retreived tracks');
				}, function(err) {
					console.err(err);
				});
		}


})();
