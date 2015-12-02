'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("SearchCtrl", SearchCtrl);
		
		SearchCtrl.$inject = ['$scope', '$http','$routeParams'];

		function SearchCtrl($scope, $http, $routeParams) {
			$scope.searchQuery = $routeParams.toSearch;

			$scope.searchMusic = [];
			$scope.artists = [];
			$scope.albums = [];
				$http.get('/search/'+ $routeParams.toSearch)
					.then(function(data) {
						console.log('Successfully searched');
						$scope.searchMusic = data.data.music;
						$scope.artists = data.data.artists;
						$scope.albums = data.data.albums;
					}, function(err) {
						console.err(err);
					});

		}
})();
