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

const dateSelect = document.querySelector('input[name="dateSelect"]');

const datepicker = new Datepicker(dateSelect, {
  buttonClass: 'btn',
}); 