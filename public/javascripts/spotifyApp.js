(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
		.config(config);

	config.$inject =["$routeProvider"];

	function config($routeProvider){
		$routeProvider
			.when('/', {
				'controller': "HomeCtrl",
				'templateUrl' : "/partials/home/home.view.html"
			})
			.when('/playlist', {
				'controller': "PlaylistCtrl",
				'templateUrl' : "/partials/playlist/playlist.view.html"
			})
			.when('/artist', {
				'controller': "ArtistCtrl",
				'template' : "/partials/artist/artist.view.html"
			})
			.when('/music', {
				'controller': "MusicCtrl",
				'templateUrl' : "/partials/music/music.view.html"
			})
			.otherwise({
				'controller' : "HomeCtrl",
				'templateUrl' : "/partials/home/home.view.html"
			});
	}
}());

