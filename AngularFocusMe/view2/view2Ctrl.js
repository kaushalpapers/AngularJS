function view2Ctrl($scope){
    console.log('View2 Controller Loaded!!');
     $scope.txt2View2 = 'test';
     $scope.isText2Focused = true;
}

app.controller("view2Ctrl",view2Ctrl);