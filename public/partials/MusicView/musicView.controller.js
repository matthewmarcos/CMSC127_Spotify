'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("MusicViewCtrl", MusicViewCtrl);

		MusicViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function MusicViewCtrl ($scope, $http, $routeParams) {

			var getRecommendations = function() {
				$http.get('/music/recommend/' + $routeParams.music_id)
					.then(function(data) {
						// console.log(data.data);
						$scope.recommendations = data.data;
					}, function(err) {
						alert('Failed to Recommend!');
					});
			};

			$scope.specificMusic = {};
			$http.get('/music/' + $routeParams.music_id)
				.then(function(data) {
					$scope.specificMusic.music_title = data.data.music_title;
					$scope.specificMusic.artist_name = data.data.artist_name;
					$scope.specificMusic.music_length = data.data.music_length;					
					$scope.specificMusic.times_played = data.data.times_played;
					$scope.specificMusic.views = data.data.views;	
					$scope.specificMusic.file_path = data.data.file_path;						
				}, function(err) {
					console.err(err);
				});
				
			$scope.recommendations = [];

			$scope.recommend = function() {
				$http.post('/music/recommend/' + $routeParams.music_id, {})
					.then(function(data) {
						alert('Successfully Recommended!');
						getRecommendations();
					}, function(err) {
						alert('Failed to Recommend!');
						getRecommendations();						
					});
			};


			$scope.username = '';
			$scope.recommendedAlready = false;
			
			$http.get('/profile')
				.then(function(data) {
					console.log(data.data);
					$scope.username = data.data.username;
					$scope.recommendations.forEach(function(username) {
						if(username === $scope.username) {
							console.log('You have already recommended this shizz')
							$scope.recommendedAlready = true;
						}
					});
				}, function(err) {
								
				});

			$scope.recommendations.forEach(function(username) {
				if(username === $scope.username) {
					console.log('You have already recommended this shizz')
					$scope.recommendedAlready = true;
				}
			})




			getRecommendations();

		}
})();
