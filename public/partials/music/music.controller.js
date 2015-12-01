'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicCtrl", MusicCtrl);

		MusicCtrl.$inject = ['$scope', '$http'];

		function MusicCtrl ($scope, $http) {
			var init = function() {
				$http.get('/music')
				.then(function(data) {
					$scope.tracks = data.data;
				}, function(err) {
					console.err(err);
				});
			};
			
			$scope.tracks = [];

			init();
				
			$scope.addTrackTitle = '';
			$scope.addTrackArtist = '';
			$scope.addTrackLength = '';
			
			$scope.addMusic = function() {
				var newTrack = {};
				newTrack.music_title = $scope.addTrackTitle;
				newTrack.music_length = $scope.addTrackLength;
				newTrack.artist_name = $scope.addTrackLength;
				alert('sending' + newTrack);
				$http.post('/music', newTrack).then(function(data){
					alert('Successfully Uploaded');
					$scope.addTrackTitle = '';
					$scope.addTrackArtist = '';
					$scope.addTrackLength = '';
					init();
				}, function(err) {
					console.log(err);
					alert("Invalid");
					$scope.addTrackTitle = '';
					$scope.addTrackArtist = '';
					$scope.addTrackLength = '';
					init();
				});
			};


			
		}
})();
