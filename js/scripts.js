//Smooth Scroll
//Nav
$(document).ready(function(){
  $(".sub-nav > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//toTop
$(document).ready(function(){
  $(".toTop").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});





//AOS
$(function() {
  AOS.init();
});

$(window).on('load', function() {
  AOS.refresh();
});
