(function(module) {

    var loginController = function($location, oauth, currentUser, alerting, loginRedirect) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = currentUser.profile;

        model.login = function(form) {
            if (form.$valid) {
                oauth.login(model.username, model.password)
                     .then(loginRedirect.redirectPreLogin)
                     .catch(function(res){
                        alerting.errorHandler(res.data.message)();
                     });
                model.password = "";
            }
        }

        model.signOut = function() {
            oauth.logout();
            $location.path("/");
        };
    };

    module.controller("loginController", loginController);

}(angular.module("security")));