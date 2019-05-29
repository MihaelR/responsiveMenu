$(document).ready(function() {


    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){          //when we scroll from top to bottom
      var scrollFromTop = $(window).scrollTop();  //when we past 350px we add class scroll
      $("body").toggleClass("scroll", (scrollFromTop > 350));
    });
});

    //SMOOTH SCROLL
    $('.menu li a[href^="#"]').on('click', function(e){
      e.preventDefault();

      var target = $(this.hash);

      if (target.length) {
          $('html, body').stop().animate({
              scrollTop: target.offset().top -60
          }, 1000);
      }

  });