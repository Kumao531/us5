$(function () {

  /* 検索ボタン上でのマウスフォーカス時のアニメーション */
  $('.detail-button').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.detail-button').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

});