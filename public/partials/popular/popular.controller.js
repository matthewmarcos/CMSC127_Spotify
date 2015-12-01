'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PopularCtrl", PopularCtrl);

		PopularCtrl.$inject = ['$scope', '$http'];

		function PopularCtrl ($scope, $http) {
			$scope.populars = [];

			$http.get('/popular')
				.then(function(data) {
					console.log(data);
					alert('success!!!!');
					$scope.populars = data.data;
				}, function(err) {
					alert('fail :(');
					console.err(err);

				});
		}
})();
