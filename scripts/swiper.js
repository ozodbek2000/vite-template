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
