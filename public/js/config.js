/**
 * Created by vyshaalnarayanam on 4/9/17.
 */

(function () {
    angular
        .module("NearBy")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/bizsearch",{
                templateUrl: "biz/views/bizsearch.view.client.html",
                controller: "BizSearchController",
                controllerAs: "model"
            })
            .when("/bizlist/:location/:place",{
                templateUrl: "biz/views/bizlist.view.client.html",
                controller: "BizListController",
                controllerAs: "model"
            })
            .when("/biz/:bizid",{
                templateUrl: "biz/views/biz.view.client.html",
                controller: "BizController",
                controllerAs: "model"
            })
            .when("/register",{
                templateUrl: "user/views/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/login",{
                templateUrl: "user/views/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/profile",{
                templateUrl: "user/views/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .otherwise({
                templateUrl: "biz/views/bizsearch.view.client.html",
                controller: "BizSearchController",
                controllerAs: "model"
            })
    }

})();