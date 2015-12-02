'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PlaylistCtrl", PlaylistCtrl);

		PlaylistCtrl.$inject = ['$scope', '$http'];

		function PlaylistCtrl ($scope, $http) {
			$scope.query = '';	
			$scope.musicList = [];
			$scope.toCreate = [];
			$scope.playlistName = '';
			$scope.playlists = [];

			$http.get('/playlist')
				.then(function(data) {
					$scope.playlists = data.data;
				}, function(err) {
					console.log(error);
				});
			$scope.create = function() {
				var indeces = [];
				var data = {};
				if($scope.playlistName && $scope.toCreate.length > 0) {
					// console.log('Creating!');
					$scope.toCreate.forEach(function(music) {
						indeces.push(music.music_id);
					});
					data.playlist_name = $scope.playlistName;
					data.music_ids = indeces;
					// console.log(data);
					$http.post('/playlist', data)
						.then(function(data) {
							$http.get('/playlist')
								.then(function(data) {
									alert('Successfully created playlist'); 
									console.log(data.data);
									$scope.playlists = data.data;
								}, function(err) {
									console.log(error);
								});
							

						}, function(err) {
							console.log(err);
						});
				} else {
					alert('Please add a Song and a Playlist Name first!');
					return;
				}
				
			}

			$scope.remove = function (music_id) {
				// alert('delete' + music_id);
				$http.delete('/playlist/' + music_id)
					.then(function(data){
						alert('Successfully deleted playlist'); 
						$http.get('/playlist')
							.then(function(data) {
								// console.log(data.data);
								$scope.playlists = data.data;
							}, function(err) {
								console.log(error);
							});
					}, function(err){
						console.log(err);
					});		
			//console.log(music_id);
				//$scope.toCreate.splice(theIndexOf(music_id, $scope.toCreate), 1);
			};

			$scope.add = function(music_id) {
				// console.log('id: ' + music_id);
				// console.log('index: ' + theIndexOf(music_id, $scope.musicList))
				// console.log($scope.musicList[theIndexOf(music_id, $scope.musicList)]);
				var index = theIndexOf(music_id, $scope.musicList);
				var music = $scope.musicList[index];
				$scope.toCreate[$scope.toCreate.length] = music;
				// $scope.$apply();
				console.log($scope.toCreate);
			};

			$scope.search = function() {
				// console.log($scope.query);
				$http.get('/mediasearch/' + $scope.query)
					.then(function(data) {
						// console.log(data.data);
						$scope.musicList = data.data;
					}, function(err) {
						//Handle error
					});
			};

			var theIndexOf = function(music_id, array) {
				for(var i = 0 ; array.length ; i++) {
					if(array[i].music_id === music_id) {
						return i;
					}
				}
			};

		}


})();
