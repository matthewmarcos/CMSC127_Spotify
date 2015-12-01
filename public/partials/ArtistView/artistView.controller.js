'use strict';
(function(){
	angular
		.module("spotifyApp")
		.controller("ArtistViewCtrl", ArtistViewCtrl);

		ArtistViewCtrl.$inject = ['$scope', '$http', '$routeParams'];

		function ArtistViewCtrl ($scope, $http, $routeParams) {
			alert('you are now at artist vie wbut i still dont know what to render here huhu sorry');
		}
})();
