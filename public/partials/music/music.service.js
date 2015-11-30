'use strict';
(function(){
	angular
		.module("spotifyApp")
		.factory("MusicService", MusicService);

	MusicService.$inject=["$http", "$q"];
 	}

})();
