(function(){
	angular.module('spotifyApp', ['ngRoute'])
	.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];
	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeCtrl',
				templateUrl: '/public/partials/home/home.view.html'
			})
			.when('/artist', {
				controller: 'ArtistCtrl',
				templateUrl: '/public/partials/artist/artist.view.html'
			})
			.when('/music', {
				controller: 'MusicCtrl',
				templateUrl: '/public/partials/music/music.view.html'
			})
			.when('/pending', {
				controller: 'PendingCtrl',
				templateUrl: '/public/partials/pending/pending.view.html'
			})
			.when('/playlist', {
				controller: 'PlaylistCtrl',
				templateUrl: '/public/partials/playlist/playlist.view.html'
			})
			.when('/profile', {
				controller: 'ProfileCtrl',
				templateUrl: '/public/partials/profile/profile.view.html'
			})
			.otherwise({
				controller: 'HomeCtrl',
				templateUrl: '/partials/home/home.view.html'
			});
	}
}());

