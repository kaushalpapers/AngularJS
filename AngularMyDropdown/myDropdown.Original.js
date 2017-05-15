function myDropdown() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var list = element.find('[my-list]');
            var txtbox = element.find('[my-textbox]');
            var listItemHoverClass = list.attr('my-list-item-hover-class');
            list.hide();
            AddTabEvent();

            list.bind('click', function () {
                setValue();
            });

            list.hover(function () {
                var listItems = list.find('[my-list-item]');
                listItems.hover(function () {
                    $(this).addClass(listItemHoverClass);
                }, function () {
                    $(this).removeClass(listItemHoverClass);
                });

            }, function () {
                var listItems = list.find('my-list-item');
                listItems.unbind('hover');
            });

            txtbox.bind('keyup', function (event) {
                list.show();
                var selectedItem = list.find('[my-list-item]').filter('.' + listItemHoverClass);
                if (event.keyCode == 40) //down 
                {
                    if (selectedItem.length > 0) {
                        var next = selectedItem.next();
                        if (next.length > 0) {
                            next.addClass(listItemHoverClass);
                            selectedItem.removeClass(listItemHoverClass);
                        }
                    } else
                        list.find('[my-list-item]').first().addClass(listItemHoverClass);

                } else if (event.keyCode == 38) {
                    if (selectedItem.length > 0) {
                        var prev = selectedItem.prev();
                        if (prev.length > 0) {
                            prev.addClass(listItemHoverClass);
                            selectedItem.removeClass(listItemHoverClass);
                        }
                    } 
                } else if (event.keyCode == 13) {
                     triggerClick();
                }
                else if (event.keyCode == 9) {
                     triggerClick();
                }
            })

            //private functions
            function triggerClick(){
                var selectedItem = list.find('[my-list-item]').filter('.' + listItemHoverClass);
                if (selectedItem.length > 0) {
                    selectedItem.trigger('click');
                }
            }

            function setValue() {
                var selectedItem = list.find('[my-list-item]').filter('.' + listItemHoverClass);
                if (selectedItem.length > 0) {
                    var item = selectedItem.find('[my-list-item-value]');
                    var itemValue = item.length > 0 ? item.text() : selectedItem.text()
                    txtbox.val(itemValue);
                    list.hide();
                }
            }

            function AddTabEvent(){
                $(document).on('keyup', function(event){
                    if(event.keyCode == 9)
                       triggerClick();
                });
            }

        }
    }
};


var app = angular.module("main", []);
app.directive("myDropdown", myDropdown);