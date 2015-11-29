(function(){
	angular.module('spotifyApp', ['ngRoute'])
	.config(config);

	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeCtrl',
				templateUrl: '/public/partials/home/home.view.html'
			})
			.when('/pending', {
				controller: 'PendingCtrl',
				templateUrl: '/public/partials/home/pending.view.html'
			})
			.when('/music', {
				controller: 'PendingCtrl',
				templateUrl: '/public/partials/home/pending.view.html'
			})
			.when('/playlist', {
				controller: 'PendingCtrl',
				templateUrl: '/public/partials/home/pending.view.html'
			})
			.when('/artist', {
				controller: 'PendingCtrl',
				templateUrl: '/public/partials/home/pending.view.html'
			})

			.otherwise({
				controller: 'HomeCtrl',
				templateUrl: '/public/partials/home/home.view.html'
			});
	};
}());

