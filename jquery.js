$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.banner-tag');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('.navbar').css('background', '#27899f');
      } else {
        $('.navbar').css('background', 'transparent');
      }
    });
  }
});
