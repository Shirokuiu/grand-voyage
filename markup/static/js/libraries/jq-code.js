$(function () {
  $('#sliderPromotion').owlCarousel({
    margin:20,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1160:{
            items:3
        }
    }
  });
  
  $(".promotion__content").not(":first").hide();
  $(".promotion__controls").click(function() {
      $(".promotion__controls").removeClass("active").eq($(this).index()).addClass("active");
      $(".promotion__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  $(".news__tabs-content").not(":first").hide();
  $(".news__tabs-controls").click(function() {
      $(".news__tabs-controls").removeClass("active").eq($(this).index()).addClass("active");
      $(".news__tabs-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});