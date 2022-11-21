function backToTop() {
    var offset = 20;
    var duration = 400;
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').slideDown(duration);
    } else {
        $('.back-to-top').slideUp(duration);
    }
};

function scrollAddClass() {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('shrink');
    } else {
        $('header').removeClass('shrink');
    }
}

$(document).ready(function () {

    scrollAddClass();
    backToTop();

    $("#banner-slider").owlCarousel({
        navigation: true,
        nav: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: true,
        loop: true,
        autoHeight: true
    })

    $("#clients-partners-logo").owlCarousel({
        items: 7.4,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        responsive: {
            1920: {
                items: 7.4,
            },
            1440: {
                items: 6.4,
            },
            1366: {
                items: 6.4,
            },
            1280: {
                items: 6.2,
            },
            1024: {
                items: 5.1,
                margin: 20,
            },
            768: {
                items: 4.1,
                margin: 20,
            },

            640: {
                items: 3.8,
                margin: 15,
            },

            320: {
                items: 2.8,
                margin: 10,
            }
        }
    });
    $("#clients-partners-logo-secound").owlCarousel({
        rtl: true,
        items: 7.6,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        responsive: {
            1920: {
                items: 7.4,
            },
            1440: {
                items: 6.4,
            },
            1366: {
                items: 6.4,
            },
            1280: {
                items: 6.2,
            },
            1024: {
                items: 5.1,
                margin: 20,
            },
            768: {
                items: 4.1,
                margin: 20,
            },

            640: {
                items: 3.8,
                margin: 15,
            },
            320: {
                items: 2.8,
                margin: 10,
            }
        }
    });
    $("#staffQuotesSlider").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 8000,
        mouseover:true,
        autoplayHoverPause: true,
        responsive: {
            1920: {
                items: 2.5,
            },
            1440: {
                items: 2.4,
            },
            1366: {
                items: 2.3,
            },
            1280: {
                items: 2.3,
            },
            1024: {
                items: 2.2,
                margin: 20,
            },
            768: {
                items: 2.1,
                margin: 20,
            },

            640: {
                items: 1.2,
                margin: 15,
            },
            320: {
                items: 1,
                margin: 10,
            }
        }
    });

    $("#latestevents").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: true,
        dots: false,
        loop: true,
        autoHeight: true,
    });
    $("#theConversation").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        margin: 0,
        items: 1,
        autoplay: true,
        nav: true,
        dots: false,
        loop: true,
        autoHeight: true
    });

    // back to top
    function scrollAddClass() {
        if ($(this).scrollTop() > 10) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    };

    $('body').on('click', '.back-to-top', function (event) {
        var duration = 400;
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });


    $(".menu-btn").on("click", function () {
        $('body').toggleClass("menu-open");
    });

    $(".close-btn").on("click", function () {
        $('body').removeClass("menu-open");
    });
    $(".nav-wraaper-box .inner-box li").on("click", function () {
        $('body').removeClass("menu-open");
    });


    $('nav ul.left-box li.inner-li a').click(function (e) {
        $("nav ul li").removeClass('active');
        $(this).parent('li.inner-li').addClass('active');

    });

    $(".inner-li").on("click", function () {
        $(this).toggleClass("show");
    });

    //$("nav ul.left-box li.inner-li a").hover(
    //function () {
    //$(this).parent('li.inner-li').addClass("active");
    //},
    //function () {
    //$("nav ul li").removeClass('active');
    //}
    //);

    // animation number
    $(".num").counterUp({ delay: 50, time: 4000 });

    // AOS Animation
    AOS.init({
        duration: 1200,
    })

    // footer link dropdown

    $('.f-title').on("click", function (e) {
        if ($(this).hasClass('menushow')) {
            remove_styles();
            $(this).removeClass('menushow');
            $(this).next('ul').removeClass('menushowtoggle');
            if ($(this).next('ul').next('ul').length) {
                $(this).next('ul').next('ul').removeClass('menushowtoggle');
            }
        } else {
            remove_styles();
            $(this).addClass('menushow');
            $(this).next('ul').addClass('menushowtoggle');
            if ($(this).next('ul').next('ul').length) {
                $(this).next('ul').next('ul').addClass('menushowtoggle');
            }
        }
        e.stopPropagation();
        e.preventDefault();
    });



    function remove_styles() {
        $('.f-title').each(function () {
            $(this).removeClass('menushow');
            $(this).next('ul').removeClass('menushowtoggle');
            if ($(this).next('ul').next('ul').length) {
                $(this).next('ul').next('ul').removeClass('menushowtoggle');
            }
        });
    }

    // search bar
    $(".search-bar").on("click", function () {
        $(".search-area").toggleClass("show");
    });

});

//backToTop
$(window).scroll(function () {
    scrollAddClass();
    backToTop();
});


//  flag-select
$(function () {
    $(".flag-option").on("click", function (e) {
        $(".flag-select").addClass("show");
        e.stopPropagation()
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".flag-select") === false) {
            $(".flag-select").removeClass("show");
        }
    });
});