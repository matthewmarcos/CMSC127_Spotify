'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("AlbumCtrl", AlbumCtrl);

		AlbumCtrl.$inject = ["$scope","$http", "$routeParams"];

		function AlbumCtrl($scope,$http,$routeParams){
			$scope.albums = [];

			$http.get('/album')
				.then(function(data) {
					alert('hahah');
					console.log(data.data);
					$scope.albums = data.data;
				}, function(err) {
					console.err(err);
				});
				
		}


})();
