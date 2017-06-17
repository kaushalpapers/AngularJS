function focusMe($timeout) {
    return {
        restrict: 'A',
        scope: {
            doFocus: '='
        },
        link: function (scope, element, attrs) {
            log('focusMe directive loaded!!');

            scope.doFocus = function () {
                log('doFocus called!!');
                $timeout(function () {
                    element.focus();
                }, 1000);
            }

            //private functions
            function log(msg) {
                console.log(msg);
            }
        }
    }
};

focusMe.$inject = ['$timeout'];
app.directive("focusMe", focusMe);