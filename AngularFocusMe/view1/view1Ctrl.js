function view1Ctrl($scope){
    console.log('View1 Controller Loaded!!');
     $scope.txt2View1 = 'test';
     $scope.isText2Focused = true;
}

app.controller("view1Ctrl",view1Ctrl);