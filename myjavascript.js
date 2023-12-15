$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('fixed-navbar');
      } else {
        $('#navbar').removeClass('fixed-navbar');
      }
    });
  });
  