
/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;

/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        // swiper.destroy();
        init = false;

        swiper = new Swiper('.mySwiper', {
            allowSlideNext: false,

        });
    }

    // Disable (for tablet)
    else if(tablet.matches || desktop.matches) {

        if (!init) {
            init = true;
            swiper = new Swiper('.mySwiper', {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },

                // breakpoints: {

                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 0,
                //     }

                // }

            });
        }
    }

    // // Disable (for desktop)
    // else if(desktop.matches) {
    //     // swiper.destroy();
    //     // init = false;
    //     if (!init) {
    //         init = true;
    //         swiper = new Swiper('.mySwiper', {
    //             slidesPerView: 3,
    //             spaceBetween: 0,
    //             centeredSlides: true,
    //             loop: true,
    //             autoHeight: true,
    //             pagination: {
    //                 el: ".swiper-pagination",
    //                 clickable: true,
    //             },
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //             // autoplay: {
    //             //     delay: 3000,
    //             //     disableOnInteraction: false,
    //             // },

    //             // breakpoints: {

    //             //     767: {
    //             //         slidesPerView: 1,
    //             //         spaceBetween: 0,
    //             //     }

    //             // }

    //         });
    //     }
    // }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});


// (function(){
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: 3,
//         spaceBetween: 0,
//         centeredSlides: true,
//         loop: true,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         // autoplay: {
//         //     delay: 3000,
//         //     disableOnInteraction: false,
//         // },
//         autoHeight: true,
//     }); 
// })();