const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".pagination-arrow-next",
    prevEl: ".pagination-arrow-prev",
  },
});