new Swiper('.swiper-container', {
  loop: true,
  // autoHeight: true,
  speed: 1200,
  effect: 'fade',
  // watchOverflow: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction:false
  // },
  // allowSlidePrev: false,
  // allowSlideNext: false, 
  // noSwiping: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // type: "bullets",
    // clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    // hideOnClick: false
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

// const mySwiper = document.querySelector('.swiper-container').swiper;


AOS.init();

