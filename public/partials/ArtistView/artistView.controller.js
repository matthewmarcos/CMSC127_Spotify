'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ArtistViewCtrl", ArtistViewCtrl);

		ArtistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function ArtistViewCtrl ($scope, $http, $routeParams) {
			$scope.artistName = '';
			$scope.artists = [];
			$http.get('/artist/music/' + $routeParams.artist_id)
				.then(function(data){
					$scope.artists = data.data;
					$scope.artistName = $scope.artists[0].artist_name;
				}, function(err) {
					console.err(err);
				});
		}
})();
