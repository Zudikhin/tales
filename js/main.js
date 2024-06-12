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

    anime({
        targets: '.main_tawny path',
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 200,
        delay: function(el, i) { return i * 200 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            if(anim.progress == 100) {
                $(".tawny_wrap").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_pi path',
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 200,
        delay: function(el, i) { return i * 200 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            if(anim.progress == 100) {
                $(".pi_wrap").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_thoughts path',
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 180,
        delay: function(el, i) { return i * 180 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            if(anim.progress == 100) {
                $(".thoughts_wrap").addClass("complete");
            }
        }
    });

    anime({
        targets: '.main_venice path',
        opacity: 1,
        easing: 'easeInOutSine',
        duration: 200,
        delay: function(el, i) { return i * 200 },
        direction: 'none',
        loop: false,
        update: function(anim) {
            if(anim.progress == 100) {
                $(".venice_wrap").addClass("complete");
            }
        }
    });

});

