angular.module("app", []).controller("firstcontroller", function ($scope){
    console.log("firstController");

   // console.log($scope);
    console.log($scope.$parent);

    //$rootScope.WhoAreYou = function () {
    //    alert("I'm RootScope!");
    //}

    $scope.WhoAreYou = function () {
        alert("I'm First Controller!");
    }

    $scope.CheckWhoIsParent = function () {
        console.log($scope.$parent);
    }

});