

$(document).ready(function(){


    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        items:1,
        margin: 0,
    });

    // counter
    $('.counting').counterUp({
        delay: 10,
        time: 1200
    });

    // animaiton on Screen exicute
    AOS.init();
})