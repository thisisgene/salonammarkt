var scrollTop
var currentTop
var lastScrollTop = 0
var scrollDirection
var clickToActivate

var imgCount = 5
var currentSlide = 1
var slideInterval = 3000
var stopShow = false
var passedTime = 0
var setStop

$(window).scroll(function() {
  scrollTop = $(this).scrollTop()

  if (scrollTop > lastScrollTop) {
    scrollDirection = 'down'
  } else {
    scrollDirection = 'up'
  }
  lastScrollTop = scrollTop
  console.log(1 - scrollTop / 100)
  $('.arrow-down').css('opacity', 1 - scrollTop / 100)
  if (
    scrollTop > $('.home-wrapper').offset().top &&
    scrollDirection === 'down'
  ) {
    if (!$('section#home').hasClass('minified')) {
      $('section#home').addClass('minified')
      setTimeout(function() {
        $('section#home').addClass('dir-change')
      }, 200)
      currentTop = scrollTop
    }
  }
  if (scrollTop < currentTop) {
    $('section#home').removeClass('minified dir-change')
  }
})

$.mark = {
  jump: function(options) {
    var defaults = {
      selector: 'a.scroll-on-page-link'
    }
    if (typeof options === 'string') {
      defaults.selector = options
    }

    options = $.extend(defaults, options)
    return $(options.selector).click(function(e) {
      var jumpobj = $(this)
      var target = jumpobj.attr('href')
      var thespeed = 1000
      var offset = $(target).offset().top
      $('.link--active').removeClass('link--active')
      jumpobj.addClass('link--active')
      clickToActivate = true

      $('html,body').animate(
        {
          scrollTop: offset
        },
        thespeed,
        'swing',
        function() {
          // setTimeout(function(){clickToActivate = false;}, 100);
        }
      )
      e.preventDefault()
    })
  }
}

function slideShow(startCount) {
  currentSlide = startCount
  $('.active-slide')
    .removeClass('active-slide')
    .css('opacity', '0')
  $('.gallery-list li:nth-child(' + currentSlide + ') span')
    .addClass('active-slide')
    .css('opacity', '1')
}

function slideLoop() {
  setInterval(function() {
    if (stopShow) {
    } else {
      if (currentSlide < imgCount) {
        currentSlide++
      } else {
        currentSlide = 1
      }
      slideShow(currentSlide)
    }
  }, 5000)
}

function changeSlide(direction) {
  stopShow = true
  stopStop = false
  clearTimeout(setStop)
  if (direction === 'next') {
    if (currentSlide < imgCount) {
      currentSlide = currentSlide + 1
    } else {
      currentSlide = 1
    }
    $('.active-slide')
      .removeClass('active-slide')
      .css('opacity', '0')
    $('.gallery-list li:nth-child(' + currentSlide + ') span')
      .addClass('active-slide')
      .css('opacity', '1')
  }
  if (direction === 'back') {
    if (currentSlide > 1) {
      currentSlide = currentSlide - 1
    } else {
      currentSlide = imgCount
    }
    $('.active-slide')
      .removeClass('active-slide')
      .css('opacity', '0')
    $('.gallery-list li:nth-child(' + currentSlide + ') span')
      .addClass('active-slide')
      .css('opacity', '1')
  }

  setStop = setTimeout(function() {
    stopShow = false
  }, 10000)
}

$(window).on('beforeunload', function() {
  $(window).scrollTop(0)
})

$(document).ready(function() {
  $(this).scrollTop(0)
  $.mark.jump()

  slideLoop()
})

function initMap() {
  var mapMarker = '../assets/img/map-marker.png'
  var salonammarkt = { lat: 48.2172205, lng: 16.3779313 }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: salonammarkt,
    scrollwheel: false,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [{ color: '#fff3de' }, { saturation: 95 }, { weight: 4.5 }]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [{ color: '#2dff16' }]
      },
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] }
    ]
  })
  var marker = new google.maps.Marker({
    position: salonammarkt,
    map: map,
    icon: mapMarker,
    size: new google.maps.Size(20, 32)
  })
}

function showEmailAlert() {
  $('.email-alert-container').show(3000)
}
function hideEmailAlert() {
  $('.email-alert-container').hide()
}

function hideAktionAlert() {
  $('.aktion-alert-container').fadeOut()
}
