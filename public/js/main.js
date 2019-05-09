(function ($) {
    "use strict";
    
    $('.btn btn-primary mb-2').on('click', function () {
        var res = $('#n1').val() + $('#n2').val();
        $('#out').val(res);
    });

})(jQuery);