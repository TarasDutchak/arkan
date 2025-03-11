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
    // var swiper = new Swiper(".infoslider", {
    //     slidesPerView: "auto",
    //     spaceBetween: 21,
    //     // loop: true,
    //     // centeredSlides: true,
    //     initialSlide: 1,
    // });


    $('.infoslider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: false,
        initialSlide: 2
    });

    // parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // partners slider

    $('.partners-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: false,
        initialSlide: 2
    });

});