function slideShow(e){currentSlide=e,$(".active-slide").removeClass("active-slide").css("opacity","0"),$(".gallery-list li:nth-child("+currentSlide+") span").addClass("active-slide").css("opacity","1")}function slideLoop(){setInterval(function(){stopShow?console.log("stop"):(currentSlide<imgCount?currentSlide++:currentSlide=1,console.log(currentSlide),slideShow(currentSlide))},3e3)}function changeSlide(e){stopShow=!0,stopStop=!1,clearTimeout(setStop),"next"===e&&(currentSlide<imgCount?currentSlide+=1:currentSlide=1,$(".active-slide").removeClass("active-slide").css("opacity","0"),$(".gallery-list li:nth-child("+currentSlide+") span").addClass("active-slide").css("opacity","1")),"back"===e&&(currentSlide>1?currentSlide-=1:(currentSlide=imgCount,console.log("one!")),$(".active-slide").removeClass("active-slide").css("opacity","0"),$(".gallery-list li:nth-child("+currentSlide+") span").addClass("active-slide").css("opacity","1")),setStop=setTimeout(function(){stopShow=!1,console.log("is false")},1e4)}function initMap(){var e={lat:48.2172205,lng:16.3779313};console.log("ashfg");var o=new google.maps.Map(document.getElementById("map"),{zoom:16,center:e,scrollwheel:!1}),l=new google.maps.Marker({position:e,map:o})}var scrollTop,currentTop,lastScrollTop=0,scrollDirection,clickToActivate,imgCount=3,currentSlide=1,slideInterval=3e3,stopShow=!1,passedTime=0,setStop;$(window).scroll(function(){console.log(currentTop),scrollTop=$(this).scrollTop(),scrollDirection=scrollTop>lastScrollTop?"down":"up",lastScrollTop=scrollTop,scrollTop>$(".home-wrapper").offset().top&&"down"===scrollDirection&&($("section#home").hasClass("minified")||($("section#home").addClass("minified"),setTimeout(function(){$("section#home").addClass("dir-change")},200),currentTop=scrollTop)),scrollTop<currentTop&&$("section#home").removeClass("minified dir-change")}),$.mark={jump:function(e){var o={selector:"a.scroll-on-page-link"};return"string"==typeof e&&(o.selector=e),e=$.extend(o,e),$(e.selector).click(function(e){var o=$(this),l=o.attr("href"),t=1e3,i=$(l).offset().top;$(".link--active").removeClass("link--active"),o.addClass("link--active"),clickToActivate=!0,$("html,body").animate({scrollTop:i},1e3,"swing",function(){}),e.preventDefault()})}},$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(document).ready(function(){$(this).scrollTop(0),$.mark.jump(),slideLoop()}),$(document).on("pageinit",function(e){$("#gallery").on("swipeleft",function(){console.log("leftttt"),changeSlide("next")}),$(".gallery-list li span").on("swiperight",function(){changeSlide("back")})});