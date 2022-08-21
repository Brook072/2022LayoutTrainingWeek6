"use strict";

var swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: ".pagination-arrow-next",
    prevEl: ".pagination-arrow-prev"
  }
});
var dateSelect = document.querySelector('input[name="dateSelect"]');
var datepicker = new Datepicker(dateSelect, {
  buttonClass: 'btn'
});
//# sourceMappingURL=all.js.map
