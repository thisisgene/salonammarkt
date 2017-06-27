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

$.mark = {
  jump: function (options) {
    var defaults = {
      selector: 'a.scroll-on-page-link'
    };
    if (typeof options === 'string') {
      defaults.selector = options;
    }

    options = $.extend(defaults, options);
    return $(options.selector).click(function (e) {
      var jumpobj = $(this);
      var target = jumpobj.attr('href');
      var thespeed = 1000;
      var offset = $(target).offset().top;
      $('.link--active').removeClass('link--active');
      jumpobj.addClass('link--active');
      // clickToActivate = true;

      $('html,body').animate({
        scrollTop: offset
      }, thespeed, 'swing', function(){
        // setTimeout(function(){clickToActivate = false;}, 100);
      });
      e.preventDefault();
    });
  }
};


$(document).ready(function() {
  $.mark.jump();
});