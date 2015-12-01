'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PlaylistCtrl", PlaylistCtrl);

		PlaylistCtrl.$inject = ['$scope', '$http'];

		function PlaylistCtrl ($scope, $http) {
			$scope.query = '';	
			$scope.search = function() {
				console.log($scope.query);
			};

			$scope.toCreate = [];
			$scope.music
		}
})();
