var app = angular.module("tabOrderModule", []);

app.directive("autoTabOrder", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var list = element.find('[tabindex]').sort(function (a, b) {
                    return a.tabIndex < b.tabIndex ? -1 : 1;
                }),

                first = list.first();

            list.last().on('keydown', function (e) {
                if (e.keyCode === 9) {
                    first.focus();
                    return false;
                }
            });

            first.focus();
        }

    }
});