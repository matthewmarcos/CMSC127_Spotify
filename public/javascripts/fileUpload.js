(function() {
	angular.module('spotifyApp')
		.service('fileUpload', ['$http', function ($http) {
		    this.uploadFileToUrl = function(file, uploadUrl){
		        var fd = new FormData();
		        fd.append('file', file);
		        $http.post(uploadUrl, fd, {
		            transformRequest: angular.identity,
		            // headers: {'Content-Type': undefined}
		            headers: {'Content-Type' : 'multipart/form-data'}
		        })
		        .success(function(){
		        })
		        .error(function(){
		        });
		    }
		}]);
})();