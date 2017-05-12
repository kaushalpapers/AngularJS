angular.module('app').directive('parentDirective', function () {
    return {
        restrict: 'A',
        scope: true,
        controller: function ($scope) {

            console.log("Parent");
          //  console.log($scope);
           console.log($scope.$parent);

            $scope.WhoAreYou = function () {
                alert("I'm Parent Directive!!");
            }

            $scope.CheckWhoIsParent = function () {
                console.log($scope.$parent);
                //$scope.$parent.WhoAreYou();
            }
        },
        template: '<div ng-click="CheckWhoIsParent()">I am Parent Directive</div>'
    }

});