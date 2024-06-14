$(document).ready(function() {
    "use strict";

    $(".header_block_drop_btn").click(function() {
        $(".header_block_drop").toggleClass("active");
    });

    $(document).mouseup(function(e) {
        var container = $(".header_block_drop");
        if(!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("active");
        }
    });

    if($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

});

