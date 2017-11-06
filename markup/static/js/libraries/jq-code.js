$(function () {
  $(".slider-promotion").owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1.1
        },
        768:{
            items:1.1
        },
        1000:{
            items:3
        }
    }
  });
  
  $('.tour__galery').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 1,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1160:{
            items:1
        }
    }
  });
  
  $('.one-country__tabs-controlsWrap').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1.5,
    focusOnSelect: true,
    variableWidth: true
  });
  
  $('.page-header__rowTop-button').click(function () {
    $(this).toggleClass('page-header__rowTop-button--open');
    
    $('.page-header__contacts-link--tel').toggleClass('page-header__contacts-link--telVissible');
    $('.page-header__rowMiddle').toggleClass('page-header__rowMiddle--open');
    $('.search-avia').toggleClass('search-avia--hidden');
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
  
  $("#fromAviaHardDirection").change(function(){
    if ($(this).prop('checked')) {
      $('.search-avia__fromTour-items--button').addClass('search-avia__fromTour-items--button-margin');
      $('.search-avia__fromTour-items--add').show();
      $('.search-avia__fromTour-items--hiddenCheckbox').hide();
      $('.search-avia__fromTour-itemsWrap--passangers').addClass('search-avia__fromTour-itemsWrap--difficultCheckbox');
    } else {
      $('.search-avia__fromTour-items--add').hide();
      $('.search-avia__fromTour-items--hiddenCheckbox').show();
      $('.search-avia__fromTour-itemsWrap--passangers').removeClass('search-avia__fromTour-itemsWrap--difficultCheckbox');
      $('.search-avia__fromTour-items--button').removeClass('search-avia__fromTour-items--button-margin');
    }
  });
  
  $('.search-avia__fromTour-list').delegate('.search-avia__fromTour-items-link', 'click', function (event) {
    event.preventDefault();
    
    $('<li class="search-avia__fromTour-items search-avia__fromTour-items--addItem"><div class="search-avia__fromTour-itemsWrap search-avia__fromTour-itemsWrap--mark"><label for="fromAviaOut">Откуда</label><input id="fromAviaOut" name="fromAviaOut" type="text" placeholder="Кишинев" required></div><div class="search-avia__fromTour-itemsWrap search-avia__fromTour-itemsWrap--earth"><label for="fromAviaIn">Куда</label><input id="fromAviaIn" name="fromAviaIn" type="text" placeholder="Амстердам" required></div><div class="search-avia__fromTour-itemsWrap search-avia__fromTour-itemsWrap--dateOut"><label for="fromAviaDateOut">Когда</label><input id="fromAviaDateOut" type="text" name="fromAviaDateOut" placeholder="30.08.2017" required></div><div class="search-avia__fromTour-itemsWrap search-avia__fromTour-itemsWrap--delete"><p class="search-avia__fromTour-itemsWrap-delete">Удалить</p></div></li>').insertBefore('.search-avia__fromTour-items--rowBottom');
  });
  
  $('.search-avia__fromTour-list').delegate('.search-avia__fromTour-itemsWrap--delete', 'click', function () {
    $(this).parent().remove();
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
  
  $(".one-country__tabsNav-content").not(":first").hide();
  $(".one-country__tabsNav-control").click(function() {
      $(".one-country__tabsNav-control").removeClass("active").eq($(this).index()).addClass("active");
      $(".one-country__tabsNav-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  $(".one-country__tabs-content").not(":first").hide();
  $(".one-country__tabs-control").click(function() {
      $(".one-country__tabs-control").removeClass("active").eq($(this).index()).addClass("active");
      $(".one-country__tabs-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  $(".one-country__tabsList-content").not(":first").hide();
  $(".one-country__tabsList-control").click(function() {
      $(".one-country__tabsList-control").removeClass("active").eq($(this).index()).addClass("active");
      $(".one-country__tabsList-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
  var ourTeamCartWorkerRateLink = $('.our-team__cart-worker-rateLink');
  var ourTeamCartWorkerRateBlock = $('.our-team__cart-worker-rateBlock');
  var ourTeamCartWorkerRateBlockExit = $('.our-team__cart-worker-rateBlock-exit');
  
  ourTeamCartWorkerRateLink.click(function (event) {
    event.preventDefault();
    
    $(this).parents('.our-team__cart-worker').find(ourTeamCartWorkerRateBlock).toggleClass('our-team__cart-worker-rateBlock--vissible')
    
    $(this).toggleClass('our-team__cart-worker-rateLink--active')
  });
  
  ourTeamCartWorkerRateBlockExit.click(function () {
    $(this).parent().removeClass('our-team__cart-worker-rateBlock--vissible');
    
    $(this).parents('.our-team__cart-worker').find(ourTeamCartWorkerRateLink).removeClass('our-team__cart-worker-rateLink--active');
  });
  
  var width = $(window).outerWidth();
  var tourDescriptionBlockText__link1__offer = $('.tour__descriptionBlock-text--link1-offer');
  var tourDescriptionOrderBlock__link1__offer = $('.tour__description-orderBlock--link1-offer');
  
  if (width <= 768) {
    $('.tour__descriptionBlock').prepend($('.tour__description-orderBlock'));
    tourDescriptionBlockText__link1__offer.after(tourDescriptionOrderBlock__link1__offer);
    
    $('.one-country__tabs-controlsWrap').slick({
      arrows: false,
      infinite: false,
      slidesToShow: 1.5,
      focusOnSelect: true,
      variableWidth: true
    });
    
    //$('.countries__search-block-items--title').parent().parent().addClass('countries__search-block-items--close');
    $('.countries__search-block-items--title').parent().addClass('countries__search-block-items--close');
    
    $('.countries__search-block-items--title').on('click', function () {
      if ($(this).parent().hasClass('countries__search-block-items--close')) {
        $(this).parent().removeClass('countries__search-block-items--close').addClass('countries__search-block-items--open');
      } else {
        $(this).parent().removeClass('countries__search-block-items--open').addClass('countries__search-block-items--close');
      }
    });
    
    $('.page-header__search label').on('click', function () {
      $(this).addClass('hidden');
      $('.page-header__search').addClass('page-header__search--open');
      $('.page-header__search input').addClass('vissible');
      $('.logo').addClass('logo--hidden');
      $('.page-header__search-exit').addClass('page-header__search-exit--open');
    });

    $('.page-header__search input').on('keypress', function () {
      $(this).addClass('focus');
    });

    $('.page-header__search-exit').on('click', function () {
      $(this).removeClass('page-header__search-exit--open');
      $('.page-header__search label').removeClass('hidden');
      $('.page-header__search').removeClass('page-header__search--open');
      $('.page-header__search input').removeClass('vissible');
      $('.logo').removeClass('logo--hidden');
    });
  } else {
    $('.tour__descriptionWrap').append($('.tour__description-orderBlock'));
    $('.one-country__tabs-controlsWrap').slick('destroy');
    $('.page-header__search label').unbind('click');
    $('.page-header__search input').unbind('keypress');
    $('.page-header__search-exit').unbind('click');
  };
  
  $(window).resize(function () {
    var i = $(window).outerWidth();
    
    if (i <= 768) {
      $('.tour__descriptionBlock').prepend($('.tour__description-orderBlock'));
      tourDescriptionBlockText__link1__offer.after(tourDescriptionOrderBlock__link1__offer);
      
      $('.one-country__tabs-controlsWrap').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 1.5,
        focusOnSelect: true,
        variableWidth: true
      });
      
      $('.countries__search-block-items--title').on('click', function () {
        if ($('.countries__search-block-list').hasClass('countries__search-block-list--close')) {
          $(this).parents().find('.countries__search-block-list').removeClass('countries__search-block-list--close');
        } else {
         $(this).parents().find('.countries__search-block-list').addClass('countries__search-block-list--close');
        }
      });
      
      $('.page-header__search label').on('click', function () {
        $(this).addClass('hidden');
        $('.page-header__search').addClass('page-header__search--open');
        $('.page-header__search input').addClass('vissible');
        $('.logo').addClass('logo--hidden');
        $('.page-header__search-exit').addClass('page-header__search-exit--open');
      });

      $('.page-header__search input').on('keypress', function () {
        $(this).addClass('focus');
      });

      $('.page-header__search-exit').on('click', function () {
        $(this).removeClass('page-header__search-exit--open');
        $('.page-header__search label').removeClass('hidden');
        $('.page-header__search').removeClass('page-header__search--open');
        $('.page-header__search input').removeClass('vissible');
        $('.logo').removeClass('logo--hidden');
      });
    } else {
      $('.tour__descriptionWrap').append($('.tour__description-orderBlock'));
      $('.one-country__tabs-controlsWrap').slick('destroy');
      $('.page-header__search label').unbind('click');
      $('.page-header__search input').unbind('keypress');
      $('.page-header__search-exit').unbind('click');
    };
  });
  
});