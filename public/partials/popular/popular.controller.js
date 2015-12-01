'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PopularCtrl", PopularCtrl);

		PopularCtrl.$inject = ['$scope', '$http'];

		function PopularCtrl ($scope, $http) {
			$scope.populars = [];
			$http.get('/music/popular')
				.then(function(data) {
					console.log(data);
					$scope.populars = data.data;
				}, function(err) {
					console.err(err);

				});
		}
})();
