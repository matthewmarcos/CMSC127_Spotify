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
			
			$scope.create = function() {
				if($scope.playlistName && $scope.toCreate.length > 0) {
					console.log('Creating!');
				} else {
					alert('Please add a Song and a Playlist Name');
					return;
				}
				
			}

			$scope.remove = function (music_id) {
				console.log(music_id);
				$scope.toCreate.splice(theIndexOf(music_id, $scope.toCreate), 1);
			};

			$scope.add = function(music_id) {
				console.log(music_id);
				console.log($scope.musicList[theIndexOf(music_id, $scope.musicList)]);
				$scope.toCreate.push($scope.musicList[theIndexOf(music_id, $scope.musicList)]);
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
