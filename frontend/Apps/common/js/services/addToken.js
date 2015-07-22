(function(module) {

    var addToken = function(currentUser, $q) {

        return {
            request: function(config) {
                if (currentUser.profile.token) {
                    config.headers['x-access-token'] = currentUser.profile.token;
                }
                return config;
            }
        };
    };

    module.factory("addToken", addToken);
    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("addToken");
    });

})(angular.module("common"));