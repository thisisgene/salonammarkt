var scrollTop;
var currentTop;
var lastScrollTop = 0;
var scrollDirection;
var clickToActivate;

$(window).scroll( function () {



  scrollTop = $(this).scrollTop();


  if (scrollTop > lastScrollTop){
    scrollDirection = 'down';
  } else {
    scrollDirection = 'up';
  }
  lastScrollTop = scrollTop;
  //
  // $('.logo').css({
  //   'transform': 'translate(-' + scrollTop / 20 + '%, 0px), scale(1 - ' + scrollTop / 20 + ')'
  // });

  if (scrollTop > $('.home-wrapper').offset().top && scrollDirection === 'down') {
    if (!$('section#home').hasClass('minified')) {
      $('section#home').addClass('minified');
      currentTop = scrollTop;
    }

  }
  if (scrollTop < currentTop) {
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
      clickToActivate = true;

      $('html,body').animate({
        scrollTop: offset
      }, thespeed, 'swing', function(){
        // setTimeout(function(){clickToActivate = false;}, 100);
      });
      e.preventDefault();
    });
  }
};
//
// function makeLinksActive() {
//   // var wScroll = $(window).scrollTop();
//   var scrollPos = $(window).scrollTop();
//   $('.link-menu li a').each(function () {
//     var currLink = $(this);
//     var refElement = $(currLink.attr("href"));
//     console.log(refElement);
//     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight- 10 > scrollPos && clickToActivate !== true) {
//       // console.log(clickToActivate);
//       $('.link-menu li a').removeClass("link--active");
//       currLink.addClass("link--active");
//       console.log('ohla');
//     }
//     else if (clickToActivate !== true){
//       currLink.removeClass("link--active");
//     }
//   });
// }

$(document).ready(function() {
  $.mark.jump();
  // makeLinksActive();
});

function initMap() {
  var salonammarkt = {lat: 48.2172205, lng: 16.3779313};
  console.log('ashfg');
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: salonammarkt,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: salonammarkt,
    map: map
  });
}