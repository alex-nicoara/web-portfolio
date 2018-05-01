// 'load' event
$(function(){
  // Trigger Menu on Click
  $("#menu-btn").click(function(){
    if($('.hslide').hasClass('animate')) {
      $('.hslide').removeClass('animate');
    }else{
      $('.hslide').addClass('animate');
    }
  });

  // Back-to-top Button
  window.onscroll = function() {scrollFunction()};
  $('#back-to-top').click(goToTop);

  // Functions
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          $('#back-to-top').css('display','block');
      } else {
          $('#back-to-top').css('display','none');
      }
  }

  function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});
