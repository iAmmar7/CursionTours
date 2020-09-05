$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.banner-tag');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('header').css('background', '#27899f');
      } else {
        $('header').css('background', 'transparent');
      }
    });
  }

  $('.item-hamburger').click(function () {
    $('.mobile-container').slideToggle();
  });

  $('.mobile-service-tag').click(function () {
    $('.mobile-service-select').slideToggle();
  });
});
