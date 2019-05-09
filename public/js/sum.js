(function ($) {
    "use strict";    
    
    $(document).ready(function(){
        $("#submit").on("click", function(){
            var a = parseInt($('#n1').val()),
                b = parseInt($('#n2').val());
            $('#out').val(a + b);
        })
    })    

})(jQuery);