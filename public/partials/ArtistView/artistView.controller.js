'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ArtistViewCtrl", ArtistViewCtrl);

		ArtistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function ArtistViewCtrl ($scope, $http, $routeParams) {
			alert('huehue');
			$scope.artists = [];
			$http.get('/artist/' + $routeParams.music_id)
				.then(function(data) {
					alert('yey');
					console.log('successfully viewed artist');
					$scope.artists = data.data;
				}, function(err) {
					alert('gg');
					console.err(err);
				});
})();
