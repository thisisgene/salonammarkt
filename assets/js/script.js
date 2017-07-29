var scrollTop;
var currentTop;
var lastScrollTop = 0;
var scrollDirection;
var clickToActivate;

var imgCount = 3;
var currentSlide = 1;
var slideInterval = 3000;
var stopShow = false;
var passedTime = 0;
var setStop;


$(window).scroll( function () {

  console.log(currentTop);

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
      setTimeout(function() {
        $('section#home').addClass('dir-change');

      }, 200);
      currentTop = scrollTop;
    }

  }
  if (scrollTop < currentTop) {
    $('section#home').removeClass('minified dir-change');
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


function slideShow(startCount) {




  currentSlide = startCount;
  $('.active-slide').removeClass('active-slide').css('opacity', '0');
  $('.gallery-list li:nth-child('+currentSlide+') span').addClass('active-slide').css('opacity', '1');


  // setTimeout(function() {
  //
  //   if (startCount < imgCount) {
  //     slideShow(startCount+1);
  //   }
  //   else {
  //     slideShow(1);
  //
  //   }
  // }, slideInterval);

}

function slideLoop() {
  setInterval(function() {
    if (stopShow) {
      console.log('stop');
    }
    else {
      if (currentSlide < imgCount) {
        currentSlide ++;
      }
      else {
        currentSlide = 1;
      }
      console.log(currentSlide);
      slideShow(currentSlide);
    }
  }, 3000)
}

function changeSlide(direction) {
  stopShow = true;
  stopStop = false;
  clearTimeout(setStop);
  // var nextSlide;
  if (direction === 'next') {
    if (currentSlide < imgCount) {
      currentSlide = currentSlide + 1;
    }
    else {currentSlide = 1}
    $('.active-slide').removeClass('active-slide').css('opacity', '0');
    $('.gallery-list li:nth-child('+currentSlide+') span').addClass('active-slide').css('opacity', '1');
    // slideShow(currentSlide);
  }
  if (direction === 'back') {
    if (currentSlide > 1) {
      currentSlide = currentSlide - 1;
    }
    else {currentSlide = imgCount; console.log('one!');}
    $('.active-slide').removeClass('active-slide').css('opacity', '0');
    $('.gallery-list li:nth-child('+currentSlide+') span').addClass('active-slide').css('opacity', '1');
    // slideShow(currentSlide - 1);
  }

  setStop = setTimeout(function() {
    stopShow = false;
    console.log('is false');
  }, 10000);

}

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  $(this).scrollTop(0);
  $.mark.jump();
  // makeLinksActive();
  // currentTop = 300;

  // slideShow(1);

  slideLoop();

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

$(document).on('pageinit', function(event) {
  $("#gallery").on('swipeleft', function () {
    console.log('leftttt');
    changeSlide('next');
  });
  $(".gallery-list li span").on('swiperight', function () {
    changeSlide('back');
  });
});