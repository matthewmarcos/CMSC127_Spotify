(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
		.config(config);

	config.$inject =["$routeProvider"];

	function config($routeProvider){
		$routeProvider
			.when('login/search', {
				'controller': "SearchCtrl",
				'template' : "/partials/search/search.view.html"
			})
			.otherwise({
				'controller' : "HomeCtrl",
				'templateUrl' : "/partials/home/home.view.html"
			});
	}
}());