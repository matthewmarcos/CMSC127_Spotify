'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("PendingCtrl", PendingCtrl);

		PendingCtrl.$inject = ['$scope', '$http'];

		function PendingCtrl ($scope, $http) {
			$scope.pendingAccounts = [];
			$scope.approvedAccounts = [];

			$http.get('/profile/pending')
				.then(function(data) {
					console.log(data);
					$scope.pendingAccounts = data.data;
				}, function(err) {

				});
			$http.get('/profile/approved')
				.then(function(data) {
					console.log(data);
					$scope.approvedAccounts = data.data;
				}, function(err) {

				});


			$scope.approve = function(id) {
				console.log('Approving user number ' + id);
				// Insert actual http query to server to approve
			};
		}
})();
