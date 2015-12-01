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
					console.log(data.data);
					$scope.tracks = data.data;
				}, function(err) {
					console.err(err);
				});
				
			$scope.addTrackTitle = '';
			$scope.addTrackArtist = '';
			$scope.addTrackLength = '';
			
			$scope.addMusic = function() {

				$http.post('/music', {
					music_title: $scope.addTrackTitle,
					music_length: $scope.addTrackLength
				}).then(function(data){
					alert('Successfully Uploaded');
					$scope.addTrackTitle = '';
					$scope.addTrackArtist = '';
					$scope.addTrackLength = '';
				}, function(err) {
					alert("Invalid");
					$scope.addTrackTitle = '';
					$scope.addTrackArtist = '';
					$scope.addTrackLength = '';
				});
			};
		}
})();
