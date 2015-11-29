(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
		.config(config);

	config.$inject =["$routeProvider"];

	function config($routeProvider){
		$routeProvider
			.when('/', {
				controller: 'HomeCtrl',
				templateUrl : '/public/partials/home/home.view.html'
			})
			.otherwise({
				controller: 'HomeCtrl',
				templateUrl : '/public/partials/home/home.view.html'
			});
	}
}());

