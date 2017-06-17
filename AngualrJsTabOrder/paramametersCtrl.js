function parametersCtrl($scope, webScoketService){
    var ws = webScoketService.getInstance();


    $scope.$on('onGetLambda', function(data){
        $scope.lambdaVal = data;
    });

    $scope.SaveLambda = function() {
        ws.send("SET_LAMBDA{ 'val' : '"+ $scope.lambdaVal +"' }");
    }

}
parametersCtrl.$inject = [ '$scope', 'webScoketService' ]
module.export = parametersCtrl;