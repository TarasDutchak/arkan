$(document).ready(function () {
    // header scroll
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // home page slider
    var swiper2 = new Swiper(".infoslider", {
        slidesPerView: "auto",
        spaceBetween: 21,
        loop: true,
        slidesOffsetBefore: -200
    });

    // parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // partners slider

    var swiper = new Swiper(".partners-slider", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".partners-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // tabs - mainpage

    $('.ourfacilities__tabbtns button').click(function () {
        $('.ourfacilities__tabbtns button').removeClass('active');
        $(this).addClass('active');
    })

    $('.btnswrap button').click(function () {
        let index = $(this).parent().index();

        $('.btnswrap button').removeClass('active');
        $(this).addClass('active');

        $('.tab-1, .tab-2, .tab-3').hide();
        $('.tab-' + (index + 1)).show();
    });

    $('.btnswrap li .active').click();


    // tabs sliders

    var swiper = new Swiper(".ourfacilities__sl", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1200,
        initialSlide: 2,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var subSwiper = new Swiper(".hotprorsubsl", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 700,
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination.v3",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.v3",
            prevEl: ".swiper-button-prev.v3",
        },
    });

    var mainSwiper = new Swiper(".hotprormainsl", {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next.v3",
            prevEl: ".swiper-button-prev.v3",
        },
        thumbs: {
            swiper: subSwiper,
        },
        pagination: {
            el: ".swiper-pagination.v3",
            clickable: true,
        },
    });

    // faq
    $('.faqrow__header').click(function(){
        $(this).parent().toggleClass('active');

        $(this).next('.faqrow__body').slideToggle();
    });


});
