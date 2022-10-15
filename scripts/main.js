const swiper = new Swiper('.swiper', {
  loop: false,
  rewind: true,
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: {
    nextEl: '.awards__card-right_arrow ',
    prevEl: '.awards__card-left_arrow',
  },
});
