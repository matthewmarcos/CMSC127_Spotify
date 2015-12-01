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
				console.log('Creating!');
			}

			$scope.add = function(music_id) {
				console.log(music_id);
				console.log($scope.musicList[theIndexOf(music_id)])
				$scope.toCreate.push($scope.musicList[theIndexOf(music_id)]);
			}

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

			var theIndexOf = function(music_id) {
				for(var i = 0 ; $scope.musicList.length ; i++) {
					if($scope.musicList[i].music_id === music_id) {
						return i;
					}
				}
			};

		}


})();
