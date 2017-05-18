function view1Ctrl($scope, $timeout){
    console.log('View1 Controller Loaded!!');
     $scope.txt2View1 = 'test';
     
     $timeout(function(){
         $scope.focusText2();
     },1000);
}

view1Ctrl.$inject = ['$scope', '$timeout'];
app.controller("view1Ctrl",view1Ctrl);