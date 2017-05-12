angular.module('app').directive('childDirective', function () {

    return {
        restrict: 'A',
        scope: true, 
        controller: function ($scope) {

            console.log("Child");
           // console.log($scope);
           console.log($scope.$parent);

            $scope.WhoAreYou = function () {
                alert("I'm Child Directive!!");
            }

            $scope.CheckWhoIsParent = function () {
                console.log($scope.$parent);
                //$scope.$parent.WhoAreYou();
            }
        },
       template: '<div ng-click="CheckWhoIsParent()">I am Child Directive</div>'
    }

});