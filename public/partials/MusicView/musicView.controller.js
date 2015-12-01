'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicViewCtrl", MusicViewCtrl);

		MusicViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function MusicViewCtrl ($scope, $http, $routeParams) {
			$scope.specificMusics = [];

			$http.get('/music/:music_id',$routeParams.music_id)
				.then(function(data) {
					$scope.specificMusics = data.data;
				}, function(err) {
					console.err(err);
				});
		}
})();
