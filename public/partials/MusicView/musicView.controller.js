'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicViewCtrl", MusicViewCtrl);

		MusicViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function MusicViewCtrl ($scope, $http, $routeParams) {
			$scope.specificMusic = {};
			$http.get('/music/' + $routeParams.music_id)
				.then(function(data) {
					// console.log('successfully viewed music');
					console.log(data.data);
					$scope.specificMusic.music_title = data.data.music_title;
					$scope.specificMusic.artist_name = data.data.artist_name;
					$scope.specificMusic.music_length = data.data.music_length;					
					$scope.specificMusic.times_played = data.data.times_played;
					$scope.specificMusic.views = data.data.views;	
					$scope.specificMusic.file_path = data.data.file_path;						
				}, function(err) {
					console.err(err);
				});
		}
})();
