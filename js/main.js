$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
      if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
        $('#nav').removeClass('nav-bgtop');
        $('#nav').addClass('nav-bg');
     
  
      } else if ($(document).scrollTop() < 100 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
        $('#nav').removeClass('nav-bg');
        $('#nav').addClass('nav-bgtop');
      }
  
  
    });
  });