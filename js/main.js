$(window).on('load', function() {
    setTimeout(function() {
        $('.preloader').fadeOut('slow', function() {
            $(this).remove();
        });
        anime({
            targets: '.img_thoughts .thoughts_wrap_line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500,
            delay: function(el, i) { return i * 500 },
            direction: 'none',
            loop: false,
            update: function(anim) {
                $(".img_thoughts .thoughts_wrap_line").css("opacity", "1");
                if(anim.progress == 100) {
                    $(".thoughts_wrap").addClass("complete");
                    $(".thoughts_wrap span").addClass("show");
                    $(".header_block_logo").addClass("show");
                    $(".header_block_drop_btn").addClass("show");
                    if ($(window).width() > 1023) {
                        setTimeout(function() {
                            $(".thoughts_wrap span").removeClass("show");
                        }, 1000);
                    }
                }
            }
        });
        anime({
            targets: '.img_pi .pi_wrap_line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2400,
            delay: function(el, i) { return i * 1200 },
            direction: 'none',
            loop: false,
            update: function(anim) {
                $(".img_pi .pi_wrap_line").css("opacity", "1");
                if(anim.progress == 100) {
                    $(".pi_wrap").addClass("complete");
                    $(".pi_wrap span").addClass("show");
                    $(".header_block_logo").addClass("show");
                    $(".header_block_drop_btn").addClass("show");
                    if ($(window).width() > 1023) {
                        setTimeout(function() { 
                            $(".pi_wrap span").removeClass("show");
                        }, 1000);
                    }
                }
            }
        });
        anime({
            targets: '.img_venice .venice_wrap_line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 500 },
            direction: 'none',
            loop: false,
            update: function(anim) {
                $(".img_venice .venice_wrap_line").css("opacity", "1");
                if(anim.progress == 100) {
                    $(".venice_wrap").addClass("complete");
                    $(".venice_wrap span").addClass("show");
                    $(".header_block_logo").addClass("show");
                    $(".header_block_drop_btn").addClass("show");
                    if ($(window).width() > 1023) {
                        setTimeout(function() { 
                            $(".venice_wrap span").removeClass("show");
                        }, 1000);
                    }
                }
            }
        });
        anime({
            targets: '.img_tawny .tawny_wrap_line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500,
            delay: function(el, i) { return i * 500 },
            direction: 'none',
            loop: false,
            update: function(anim) {
                $(".img_tawny .tawny_wrap_line").css("opacity", "1");
                if(anim.progress == 100) {
                    $(".tawny_wrap").addClass("complete");
                    $(".tawny_wrap span").addClass("show");
                    $(".header_block_logo").addClass("show");
                    $(".header_block_drop_btn").addClass("show");
                    if ($(window).width() > 1023) {
                        setTimeout(function() { 
                            $(".tawny_wrap span").removeClass("show");
                        }, 1000);
                    }
                }
            }
        });
    }, 2000);
});


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

