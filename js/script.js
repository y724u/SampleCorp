$(function () {


});

var mySwiper = new Swiper('.swiper-container', {

  // レスポンシブブレーポイント（画面幅による設定）
  breakpoints: {
    // 画面幅が 767px 以上の場合（window width >= 767px）
    767: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // 画面幅が 768px 以上の場合（window width >= 768px）
    865: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
// 画面幅が 768px 以上の場合（window width >= 768px）
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 40
    }
  },
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

