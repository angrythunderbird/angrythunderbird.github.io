$(function () {

  $(".featured__rate").rateYo({
    rating: 4.5,
    starWidth: "15px",
    normalFill: "#c3c3c3",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px"
  });

  $(".product__rate").rateYo({
    rating: 4.5,
    starWidth: "14px",
    normalFill: "#c3c3c3",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px"
  });

  var swiper = new Swiper('.featured__slider', {
    navigation: {
      nextEl: '.featured__toright',
      prevEl: '.featured__toleft',
    },
  });

  $('.release__link').on('click', function () {
    $('.release__box').slideToggle("fast");
  });

  var mixer = mixitup('.release__items');

  var swiper = new Swiper('.followers__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.followers__toright',
      prevEl: '.followers__toleft',
    },
  });

  var swiper = new Swiper('.feedback__slider', {
    slidesPerView: 2,
    spaceBetween: 29,
    navigation: {
      nextEl: '.feedback__toright',
      prevEl: '.feedback__toleft',
    },
  });

  /* $(".menu__link").hover(function () {
    var isHovered = $(this).is(":hover") || $(this).next().is(":hover");
    if (isHovered) {
      $(this).next().slideDown(300);
    } else {
      $(this).next().hide();
    }
  }); */

  $('.product__text').mCustomScrollbar();

  /* $('.product__text').each(element, new SimpleBar()); */
});