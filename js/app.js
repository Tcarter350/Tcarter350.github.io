$(function(){
  console.log('loaded');
  $('.slider').slick({
    prevArrow: '<img src="images/left-arrow.svg" class="arrow arrow-left">',
    nextArrow: '<img src="images/left-arrow.svg" class="arrow arrow-right">',
    autoplay: true,
    autoplaySpeed: 3000
  });
});
