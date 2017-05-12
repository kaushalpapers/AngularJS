angular.module('app').directive('isolatedDirective', function () {

    return {
        restrict: 'A',
        scope: true,
        controller: function ($scope) {

            console.log("Isolated");
          //  console.log($scope);
            console.log($scope.$parent);     

            $scope.WhoAreYou = function () {
                alert("I'm Isolated Directive!!");
            }

            $scope.CheckWhoIsParent = function () {
                console.log($scope.$parent);
                // $scope.$parent.WhoAreYou();
            }
        },
        template: '<div ng-click="CheckWhoIsParent()">I am Isolated Directive</div>'
    }

});