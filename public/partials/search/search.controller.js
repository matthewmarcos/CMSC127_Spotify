'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("SearchCtrl", SearchCtrl);
		SearchCtrl.$inject = ['$scope', '$http'];

		function SearchCtrl($scope, $http) {
			$scope.query = '';
			$scope.results = {};
			$scope.search = function() {
				// console.log($scope.query);	
				$http.get('/search/' + $scope.query)
					.then(function(data) {
						console.log(data);	
					}, function(err) {
						$console.log(data);
					});
			};
		}
})();
