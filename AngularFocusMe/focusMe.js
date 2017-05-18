function focusMe($timeout) {
    return {
        restrict: 'A',
        // scope: {
        //     isFocused : '='
        // },
        link: function (scope, element, attrs) {
            log('focusMe directive loaded!!');
            $timeout(function(){
                        element.focus();
                    }, 10);

            // scope.$watch('isFocused', function(){
            //     log('focusMe directive: isFocused changed..'+ scope.isFocused);
            //     if(scope.isFocused)
            //     {
            //         log('focusMe directive: Trying to focus. isFocused: '+ scope.isFocused);
            //         $timeout(function(){
            //             element.focus();
            //         }, 10)
            //     }
                
            // });

            //private functions
            function log(msg){
                console.log(msg);
            }
        }
    }
};

focusMe.$inject = ['$timeout'];
app.directive("focusMe", focusMe);