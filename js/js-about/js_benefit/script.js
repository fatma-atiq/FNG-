$(document).ready(function(){
    
  $('.featurediv').slideDown(1000);
     $('.benefit1').fadeIn(1000);
  
  
  $('.head1').click(function(){
      $('.accbody1').fadeToggle();
      $('.accbody2').slideUp();
        $('.accbody3').slideUp();

  })
   
    $('.head2').click(function(){
       $('.accbody2').fadeToggle();
        $('.accbody1').slideUp();
        $('.accbody3').slideUp();
    })
    
     $('.head3').click(function(){
       $('.accbody3').fadeToggle();
        $('.accbody1').slideUp();
        $('.accbody2').slideUp();
    })
    
});