'use strict';
(function(){
	angular
		.module('spotifyApp')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', '$http'];

	function HomeCtrl ($scope, $http) {
		alert('Loaded!');
	}

})();
