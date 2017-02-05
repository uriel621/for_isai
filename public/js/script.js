var ever = angular.module("forIsai", ["ngRoute"]);

ever.config(["$routeProvider", function($routeProvider){
    $routeProvider

    .when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    }) 
    .when("/register", {
        templateUrl: "views/register.html",
        controller: "RegistrationController"
    }) 
    .when("/home", {
        templateUrl: "views/home.html",
        controller: "ChatController"
    })
    .when("/success", {
        templateUrl: "views/success.html",
        controller: "SuccessController"
    }) 
    .otherwise({
        redirectTo: "/login"
    });
}]);