import Swiper from "swiper/bundle";
import "swiper/css/bundle";

var collectionSwiper = new Swiper(".collection", {
    spaceBetween: 16,
    pagination: {
        el: ".collection-pagination",
        clickable: true,
    },
});

var discountSwiper = new Swiper(".discount", {
    spaceBetween: 16,
    pagination: {
        el: ".discount-pagination",
        clickable: true,
    },
});

var sofaSwiper = new Swiper(".sofa", {
    spaceBetween: 16,
    slidesPerView: 1.3,
    scrollbar: {
        el: document.querySelector(".sofa-scrollbar"),
        // hide: true,
        draggable: true,
    },
    breakpoints: {
        767: {
            spaceBetween: 20,
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: "row",
            },
        },
    },
});

var adSwiper = new Swiper(".ad", {
    spaceBetween: 16,
    slidesPerView: 1.1,
    scrollbar: {
        el: document.querySelector(".ad-scrollbar"),
        // hide: true,
        draggable: true,
    },
    breakpoints: {
        767: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
    },
});

var productSwiper = new Swiper(".products", {
    spaceBetween: 16,
    slidesPerView: 1.2,
    breakpoints: {
        767: {
            spaceBetween: 20,
            slidesPerView: 4,
        },
    },
});
