'use strict';
(function(){
	angular
		.module("spotifyApp")
		.factory("PlaylistViewService", PlaylistViewService);

	PlaylistViewService.$inject=["$http", "$q"];
 	}

})();
