'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicCtrl", MusicCtrl);

		MusicCtrl.$inject = ['$scope', '$http'];

		function MusicCtrl ($scope, $http) {
			$scope.tracks = [];

			$http.get('/music')
				.then(function(data) {
					console.log(data);
					$scope.tracks = data.data;
				}, function(err) {
					console.log("errorewrwewr");
				});
		}
})();
