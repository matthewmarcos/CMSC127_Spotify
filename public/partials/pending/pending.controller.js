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
				
				$http.put("/profile/approve/" + id, {})
					.then(function(data) {
						alert('succesfully approved user ' + id);

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
					}, function(err) {
						console.log('failed to approve user ' + id);
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
						});
			};
		}
})();
