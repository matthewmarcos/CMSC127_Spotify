'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PlaylistViewCtrl", PlaylistViewCtrl);

		PlaylistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function PlaylistViewCtrl ($scope, $http, $routeParams) {
			alert('lol');
			$scope.tracks = [];
			$http.get('/playlist/' + $routeParams.playlist_id)
				.then(function(data) {
					$scope.tracks = data.data;
					console.log('successfully retreived tracks');
				}, function(err) {
					console.err(err);
				});
		}


})();
