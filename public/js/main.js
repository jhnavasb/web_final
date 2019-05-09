(function ($) {
    "use strict";
    var a = parseInt($('#n1').val(), 10),
        b = parseInt($('#n2').val(), 10);
    $('.btn btn-primary mb-2').on('click', function () {
       
   
        $('#out').val(a + b);
    });

})(jQuery);