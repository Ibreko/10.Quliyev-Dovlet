



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor:"true",
 
    
      autoplay: {
          delay: 6000,
        },
        
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: "true"
    },
  

    breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      520: {
          slidesPerView: 2,
          spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 20,
  },

      1024: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      

      1300: {
        slidesPerView: 3,
        spaceBetween: 0,
    },

    },
  

  

   });
   


  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



function kura_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}


function kura_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){kura_tm_preloader();},speed);
	setTimeout(function(){jQuery('body').addClass('opened');},speed+2000);
}







$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});




$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(9000).queue(function() {
        $(this).remove();
      });}
  }, 3000);});


