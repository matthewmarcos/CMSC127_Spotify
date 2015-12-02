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
			.when('/artistView/:artist_id', {
				controller: 'ArtistViewCtrl',
				templateUrl: '/public/partials/ArtistView/artistView.view.html'
			})
			.when('/music', {
				controller: 'MusicCtrl',
				templateUrl: '/public/partials/music/music.view.html'
			})
			.when('/musicView/:music_id', {
				controller: 'MusicViewCtrl',
				templateUrl: '/public/partials/MusicView/musicView.view.html'
			})
			.when('/admin', {
				controller: 'AdminCtrl',
				templateUrl: '/public/partials/admin/admin.view.html'
			})
			.when('/album', {
				controller: 'AlbumCtrl',
				templateUrl: '/public/partials/album/album.view.html'
			})
			.when('/popular', {
				controller: 'PopularCtrl',
				templateUrl: '/public/partials/popular/popular.view.html'
			})
			.when('/playlist', {
				controller: 'PlaylistCtrl',
				templateUrl: '/public/partials/playlist/playlist.view.html'
			})
			.when('/profile', {
				controller: 'ProfileCtrl',
				templateUrl: '/public/partials/profile/profile.view.html'
			})
			.when('/subscriptions', {
				controller: 'SubscriptionsCtrl',
				templateUrl: '/public/partials/subscriptions/subscriptions.view.html'
			})
			.otherwise({
				controller: 'HomeCtrl',
				templateUrl: '/partials/home/home.view.html'
			});
	}
}());

