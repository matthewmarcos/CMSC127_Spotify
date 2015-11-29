'use strict';
(function(){
	angular
		.module("spotifyApp")
		.factory("SearchService", DegreeProgramsService);

	SearchService.$inject=["$http", "$q"];
 	}

})();
