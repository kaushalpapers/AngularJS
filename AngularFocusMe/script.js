var app = angular.module("mymodule", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view1/view1.html",
        controller: "view1Ctrl"
    })
    .when("/view2", {
        templateUrl : "view2/view2.html",
        controller: "view2Ctrl"
    });
});
