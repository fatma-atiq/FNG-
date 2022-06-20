$(document).ready(function () {
  $('.logo').fadeIn(2000);
  $('.content-main').slideDown(1000);
  $('.content-sub').slideDown(2000);
});


 /* Mobile navigation */
 $('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
  
  nav.slideToggle(200);
  if (icon.hasClass('fas fa-align-justify')) {
    icon.addClass('far fa-times-circle');
    icon.removeClass('fas fa-align-justify');
} else {
    icon.addClass('fas fa-align-justify');
    icon.removeClass('far fa-times-circle');
}        
});  





