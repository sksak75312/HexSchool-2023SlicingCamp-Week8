import Swiper from "swiper/bundle";

const swiper = new Swiper('.intro-swiper', {
  autoplay: {
    delay: 1500,
  },
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});