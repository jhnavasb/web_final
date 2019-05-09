(function ($) {
    "use strict";    
    
    $('.btn btn-primary mb-2').on('click', function () {
        var a = parseInt($('#n1').val(), 10),
            b = parseInt($('#n2').val(), 10);

        $('#out').val(a + b);
    });

    $(document).ready(function(){
        alert("funciona");
        $("#submit").on("click", function(){
            var a = parseInt($('#n1').val());
            var b = parseInt($('#n2').val());
               var sum = a + b;
                alert(sum);
        })
    })

    

})(jQuery);