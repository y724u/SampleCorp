$(function () {


});

var mySwiper = new Swiper('.swiper-container', {
  // 1度に表示するスライドの数
  slidesPerView:1,
  // スライドの方向
  direction: 'horizontal',
  // スライドの間の余白
  // spaceBetween: '40',
  // ループモード
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

