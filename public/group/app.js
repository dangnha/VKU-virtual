$(document).ready(function() {
    $('.ndn-clubs').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev pull-left slick-icon"><i class="fa-solid fa-circle-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right slick-icon"><i class="fa-solid fa-circle-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    draggable: true,

                }
            }

        ]


    });
});