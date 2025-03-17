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
        // initialSlide: 1,
        loop: true,
        // slidesOffsetBefore: 0,
        breakpoints: {
            320: {
                spaceBetween: 10,
                slidesOffsetBefore: 0,
                initialSlide: 1,
            },
            576: {
                spaceBetween: 10,
                slidesOffsetBefore: -200,
                initialSlide: 0,
            },
            1200: {
                spaceBetween: 21,
                slidesOffsetBefore: -200,
            },
        },
    });

    // parallax

    if ($('#scene').length > 0) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }

    // partners slider

    var swiper = new Swiper(".partners-slider", {
        slidesPerView: 2,
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
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
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
        slidesPerView: 1.2,
        spaceBetween: 10,
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
        breakpoints: {
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3.3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
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
        }

    });

    var mainSwiper = new Swiper(".hotprormainsl", {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        watchSlidesProgress: true,
        // navigation: {
        //     nextEl: ".swiper-button-next.v3",
        //     prevEl: ".swiper-button-prev.v3",
        // },
        thumbs: {
            swiper: subSwiper,
        },
        // pagination: {
        //     el: ".swiper-pagination.v3",
        //     clickable: true,
        // },

    });

    // faq
    $('.faqrow__header').click(function () {
        $(this).parent().toggleClass('active');

        $(this).next('.faqrow__body').slideToggle();
    });

    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.adaptmenu').toggleClass('show');
        $('.header__bottsect').toggleClass('open');
    })

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.header__left').toggleClass('show');
        window.scrollTo(0, 0);
    })

    if ($('#videomodal').length > 0) {
        let modal = document.getElementById("videomodal"); // Замініть на ID вашого модального вікна
        let iframe = modal.querySelector("iframe");

        modal.addEventListener("hidden.bs.modal", function () {
            let src = iframe.src;
            iframe.src = "";  // Очистка src, щоб відео зупинилося
            iframe.src = src; // Відновлення src
        });
    }



    $('.filtermore').click(function (e) {
        e.preventDefault();
        $(this).parent('.filterbox').toggleClass('open');
        $(this).find('span').toggle();
    });


    // object sliders
    // var swiper = new Swiper(".objslider1", {
    //     loop: true,
    //     spaceBetween: 10,
    //     slidesPerView: 6,
    //     freeMode: true,
    //     watchSlidesProgress: true,
    // });
    // var swiper2 = new Swiper(".objslider2", {
    //     loop: true,
    //     spaceBetween: 10,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     thumbs: {
    //         swiper: swiper,
    //     },
    // });

    $(".objslider2").each(function (index) {
        let $this = $(this);
        let $parent = $this.closest('.object-item__right'); // Знаходимо батьківський контейнер, якщо він є
        let thumbSlider = new Swiper($parent.find(".objslider1")[0], {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 6,
                },
            },
        });

        new Swiper(this, {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: $parent.find(".swiper-button-next")[0],
                prevEl: $parent.find(".swiper-button-prev")[0],
            },
            thumbs: {
                swiper: thumbSlider,
            },
        });
    });


    $('.moreobjbtn').click(function (e) {
        e.preventDefault();
        $(this).parents('.object-item').toggleClass('open');
    })


    $('.filterbtn').click(function () {
        $('.outobj__filter').toggle();
    })


    // map

    var map = L.map('map').setView([48.9226, 24.7111], 14);

    // Додавання Positron карти від Carto
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    var markers = [
        { coords: [48.9226, 24.7103], text: "Площа Ринок", icon: 'img/object/mapmarker1.svg' },
        { coords: [48.9233, 24.7235], text: "Міське озеро", icon: 'img/object/mapmarker1.svg' },
        { coords: [48.9167, 24.7039], text: "Залізничний вокзал", icon: 'img/object/mapmarker2.svg' },
        { coords: [48.9194, 24.7118], text: "Фортечна галерея 'Бастіон'", icon: 'img/object/mapmarker2.svg' }
    ];

    // Додавання маркерів з унікальними іконками
    markers.forEach(marker => {
        let customIcon = L.icon({
            iconUrl: marker.icon,   // Унікальна іконка для кожного маркера
            iconSize: [40, 40],     // Розмір іконки
            iconAnchor: [20, 40],   // Точка прив’язки (центр внизу)
            popupAnchor: [0, -40]   // Зсув попапу
        });

        L.marker(marker.coords, { icon: customIcon }).addTo(map)
            .bindPopup(marker.text);
    });


});
