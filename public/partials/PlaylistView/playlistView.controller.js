'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PlayViewlistCtrl", PlayViewlistCtrl);

		PlaylistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function PlaylistViewCtrl ($scope, $http, $routeParams) {
			$scope.specificMusic = {};
			$http.get('/playlist/' + $routeParams.playlist_id)
				.then(function(data) {
					
				}, function(err) {
					console.err(err);
				});
		}


})();
