(function(){
	angular
		.module("spotifyApp", ["ngRoute"])
		.config(config);

	config.$inject =["$routeProvider"];

	function config($routeProvider){
		$routeProvider
			.when('login/home', {
				'controller': "HomeCtrl",
				'templateUrl' : "/partials/home/home.view.html"
			})
			.when('login/search', {
				'controller': "SearchCtrl",
				'template' : "/partials/search/search.view.html"
			})
			.when('login/admin', {
				'controller': "AdminCtrl",
				'templateUrl' : "/partials/admin/admin.view.html"
			})
			.otherwise({
				'controller' : "HomeCtrl",
				'templateUrl' : "/partials/home/home.view.html"
			});
	}
}());
