const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

    autoplay: {
        delay: 3000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
  });