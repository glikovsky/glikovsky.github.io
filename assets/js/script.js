$(function() {

	'use strict';

  // モバイルナビをボタンで開閉する動作
  $("#nav_toggle").click(function() {
    $(this).toggleClass("open");
    $("#mobile_nav").slideToggle();
  })

  // モバイルナビが開いている時のウィンドウリサイズに対応する動作
  $(window).on('resize', function () {
    if (window.matchMedia('(min-width:768px)').matches) {
      $("#mobile_nav").slideUp();
    } else if ($("#nav_toggle").hasClass("open")) {
      $("#mobile_nav").slideDown();
    }
  });
});