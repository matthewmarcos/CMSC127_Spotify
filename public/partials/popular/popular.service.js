'use strict';
(function(){
	angular
		.module("spotifyApp")
		.factory("PopularService", PopularService);

	PopularService.$inject=["$http", "$q"];
 	}

})();
