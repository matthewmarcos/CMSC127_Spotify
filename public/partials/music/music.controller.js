'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicCtrl", MusicCtrl);

		MusicCtrl.$inject = ['$scope', '$http'];

		function MusicCtrl ($scope, $http) {
			$scope.tracks = [];
			$scope.addTrackTitle = '';
			$scope.addTrackArtist = '';
			$scope.addTrackLength = '';
			$scope.addTrackAlbum = '';

			var resetFields = function() {
				$scope.addTrackTitle = '';
				$scope.addTrackArtist = '';
				$scope.addTrackLength = '';
				$scope.addTrackAlbum = '';
			};
			var init = function() {
				// console.log('init!');
				$http.get('/music')
					.then(function(data) {
						$scope.tracks = data.data;
					}, function(err) {
						console.err(err);
					});
			};	

			init();
			resetFields();		

			$scope.addMusic = function() {
				var newTrack = {};
				
				newTrack.music_title = $scope.addTrackTitle;
				newTrack.artist_name = $scope.addTrackArtist;
				newTrack.music_length = $scope.addTrackLength;
				newTrack.album_name = $scope.addTrackAlbum;

				console.log('sending' + newTrack);
				$http.post('/music', newTrack)
					.then(function(data){
						// console.log('Successfully added ' + $scope.addTrackTitle);
						Materialize.toast('Successfully added ' + newTrack.music_title + '!', 3000);
						resetFields();
						init();
					}, function(err) {
						console.log(err);
						resetFields();
						init();
					});
			};
			
		}
})();
