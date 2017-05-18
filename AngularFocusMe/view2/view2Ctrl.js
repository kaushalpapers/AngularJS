function view2Ctrl($scope){
    console.log('View2 Controller Loaded!!');
     $scope.txt2View2 = 'test';
     $scope.txt3View2Val = 'view2';
     $scope.isShown = false;
     $scope.showDiv = function(){
         $scope.isShown = true;
         $scope.focusText3();
     }
}

app.controller("view2Ctrl",view2Ctrl);