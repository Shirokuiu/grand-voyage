$(function () {
  $('#sliderPromotion, #sliderPromotion2').owlCarousel({
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
  
  
  $(".search-avia__tabs-content").not(":first").hide();
  $(".search-avia__tabs-controls").click(function() {
    $(".search-avia__tabs-controls").removeClass("active").eq($(this).index()).addClass("active");
    $(".search-avia__tabs-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  $('.search-avia__fromTour-itemsWrap').on( 'focusin', function () {
    $(this).addClass('search-avia__fromTour-itemsWrap--focus');
  });
  $('.search-avia__fromTour-itemsWrap').on( 'focusout', function () {
    $(this).removeClass('search-avia__fromTour-itemsWrap--focus');
  });
  
  $("#fromAviaMoreOption").change(function(){
    if ($(this).prop('checked')) {
      $('.search-avia__fromAvia-checkedAddOptions').fadeIn(100).show();
    } else {
      $('.search-avia__fromAvia-checkedAddOptions').fadeOut(100); 
    }
  });
  
  $('#fromAviaDateOut, #fromAviaDateTo').datepicker({
    dateFormat: 'dd.mm.yy'
  });
  
  $(".promotion__content").not(":first").hide();
  $(".promotion__headline-block-control").click(function(event) {
    event.preventDefault();
    $(".promotion__headline-block-control").removeClass("active").eq($(this).index()).addClass("active");
    $(".promotion__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  $(".news__tabs-content").not(":first").hide();
  $(".news__tabs-controls").click(function() {
      $(".news__tabs-controls").removeClass("active").eq($(this).index()).addClass("active");
      $(".news__tabs-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});