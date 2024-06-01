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

    anime({
        targets: '.first .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 500 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            $(".first .lines path").css("opacity", "1");
            if(anim.progress == 100) {
                $(".first").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_tawny .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 500 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            $(".main_tawny .lines path").css("opacity", "1");
            if(anim.progress == 100) {
                $(".main_tawny").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_pi .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 500 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            $(".main_pi .lines path").css("opacity", "1");
            if(anim.progress == 100) {
                $(".main_pi").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_thoughts .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 500,
        delay: function(el, i) { return i * 500 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            $(".main_thoughts .lines path").css("opacity", "1");
            if(anim.progress == 100) {
                $(".main_thoughts").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_venice .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 400,
        delay: function(el, i) { return i * 400 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            $(".main_venice .lines path").css("opacity", "1");
            if(anim.progress == 100) {
                $(".main_venice").addClass("complete");
            }
        }
    });

    $('.jarallax').jarallax({
        speed: 0.2
    });
        
    // function animation() {
    //     var count = $("#tawnyDetail").find("path").length;
    //     var second = 10;
    //     var iteration = second/count;
    //     console.log(iteration);

    //     $("#tawnyDetail").find("path").each(function() {

    //     });
    // }

    // animation();


});

