$(document).ready(function(){
  $('.fa-bars').click(function(){

    $(this).toggleClass('fa-times');//fa times is crossicon and togglr means when we click it fatimes icon appear and class fa-times made in html then we call taht class to design in css

    $('.nav').toggleClass('nav-toggle');// and new nav-toggle class make in html
  });
  $(window).on('load scroll',function(){
    $('fa-bars').removeClass('fa-times');//fa times is crossicon and togglr means when we click it fatimes icon appear and class fa-times made in html then we call taht class to design in css

    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop()>10){
      $(header).addClass('header-active');
    }
    else{
      $(header).removeClass('header-active');
    }

  });
  $('.facility').magnificPopup({//Magnific Popup is a fast, light, mobile-friendly and responsive lightbox and modal dialog jQuery plugin. It can be used to open inline HTML, ajax loaded content, image, form, iframe (YouTube video, Vimeo, Google Maps), and photo gallery. It has added animation effects using CSS3 transitions
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  })



});