(function(module) {

    var secretController = function (recipes) {

        var model = this;

        model.users = null;

        recipes.getSecret().then(function(users) {
            model.users = users;
        });

    };

    module.controller("secretController", secretController);

}(angular.module("security")));