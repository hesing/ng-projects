(function(module) {

    var recipes = function($http) {

        var getSecret = function() {
            return $http.get("http://localhost:5000/api/admin").then(function(response) {
                return response.data;
            });
        };

        return {
            getSecret: getSecret
        }
    };

    module.factory("recipes", recipes);

}(angular.module("security")))