(function ($) {
    "use strict";

    $('.btn btn-primary mb-2').on('click', function () {
        var a = parseInt($('#n1').val(), 10),
            b = parseInt($('#n2').val(), 10);
   
        $('#out').val(a + b);
    });

})(jQuery);