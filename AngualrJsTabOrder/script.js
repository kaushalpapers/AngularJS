$('.test').children().focus(function(){
    var name = $(this).attr('name');
    $('#result').html(name);

    
});

$('#mydiv').bind('keydown', function(event) {
   //console.log(event.keyCode);
   alert(event.keyCode);
});


 $('.test').each(function(){
    var list  = $(this).find('[tabindex]').sort(function(a,b){ return a.tabIndex < b.tabIndex ? -1 : 1; }),

    first = list.first();;

    list.last().on('keydown', function(e){
        if( e.keyCode === 9 ) {
            first.focus();
            return false;
        }
    });

    first.focus();
});