var scrollTop;

$(window).scroll( function () {
  scrollTop = $(this).scrollTop();
  //
  // $('.logo').css({
  //   'transform': 'translate(-' + scrollTop / 20 + '%, 0px), scale(1 - ' + scrollTop / 20 + ')'
  // });

  if (scrollTop >= $('.home-wrapper').offset().top) {
    $('section#home').addClass('minified');
  }
  if (scrollTop < 300) {
    $('section#home').removeClass('minified');
  }
});