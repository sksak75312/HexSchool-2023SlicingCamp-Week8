import Swiper from 'swiper/bundle';

const carouselSwiper = new Swiper('.carousel-swiper', {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    768: {
      autoplay: {
        enabled: true,
      },
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});


const shareSwiper = new Swiper('.share-swiper', {
  enabled: false,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      enabled: true,
      slidesPerView: 2,
    },

    1200: {
      enabled: true,
      slidesPerView: 3,
    },
  },
});
