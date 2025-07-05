$(document).ready(function() {	

	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});


	// swiper-js
    var swiper = new Swiper("#mySwiper1", {
        centeredSlides: false,
        loop: true,
        spaceBetween: 15,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            576: {
                slidesPerView: 2.5,
            },
            0: {
                slidesPerView: 1.5,
            },
        }
    });


	// tabs
    $('.tabs a').click(function() {
		$('.panel').hide();
		$('.tabs a.active').removeClass('active');
		$(this).addClass('active');
		var panel = $(this).attr('href');
		$(panel).fadeIn(1000);
		return false;
	  });
	$('.tabs li:first a').click();


	// swiper-js
    var swiper = new Swiper("#mySwiper2", {
        centeredSlides: false,
        loop: true,
        spaceBetween: 15,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            576: {
                slidesPerView: 2.5,
            },
            0: {
                slidesPerView: 1.5,
            },
        }
    });


	// mobile footer accordion js code
    $('.acc:nth-child(1) .acc-head').addClass('active');
    $('.acc:nth-child(1) .acc-content').slideDown();
    $('.acc:nth-child(1) .acc-head i').removeClass('fa-plus').addClass('fa-minus');
    $('.acc-head').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $('.acc-head i').removeClass('fa-minus').addClass('fa-plus');
            $(this).siblings('.acc-content').slideDown();
            $(this).addClass('active');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        }
    });
		
});
