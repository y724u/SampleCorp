$(function () {
  // <!-- ハンバーガーメニュー -->
  $(document).ready(function() {
    $('.drawer').drawer();
  });

  // <!-- スムーススクロール -->
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').on('click', function () {
    // 移動速度を指定（ミリ秒）
    let speed = 700;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top - 100;
    // ターゲットの位置までspeedの速度で移動
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
});

// <!-- スライドトグル -->
  $(".js-toggle").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  // <!-- ダウンロードボタン活性化&非活性化 -->
  $('.js-checkbox').on('change', function () {
    if ($(this).prop('checked'))
      $('.js-button').addClass('box__checked');
    else
      $('.js-button').removeClass('box__checked');
  });

// <!-- スワイパースライド -->
var mySwiper = new Swiper('.swiper-container', {

  // レスポンシブブレーポイント（画面幅による設定）
  breakpoints: {
    // 画面幅が 767px 以上の場合（window width >= 767px）
    767: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // 画面幅が 865px 以上の場合（window width >= 865px）
    865: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
// 画面幅が 1100px 以上の場合（window width >= 1100px）
    1100: {
      slidesPerView: 2.8,
      spaceBetween: 40
    },
    // 画面幅が 1280px 以上の場合（window width >= 1280px）
    1281: {
      slidesPerView: 3,
    }
  },
  // スライドの方向
  direction: 'horizontal',
  // スライドの間の余白

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

