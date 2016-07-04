function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	// STICKY FOOTER
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});
}

$(window).resize(function() {
	resize();
});

$(document).ready(function() {
	// PRELOADER
	if ($('body').hasClass('hide')) {
		$('.preloader').fadeOut(1000, function(){
			setTimeout(function(){$('.preloader').remove(); },2000);
			$('body').removeClass('hide');
		});
		$('body').removeClass('hide');
	} else {
		$('.preloader').fadeOut(1000, function(){
			$('.preloader').remove();
		});
	}
	
	// Home Slider
	$('#slides').superslides({
       animation: 'fade',
		pagination: false,
		hashchange: false,
	   play: true,
    });
	
	// Nav 
	$('.mobile-burger-menu').click(function(){
		$('.nav').slideToggle(300);
	});
	
	resize();
});

$(window).load(function() {

	$('#container').BlocksIt({
		numOfCol: 2,
		offsetX: 8,
		offsetY: 8
	});
	resize();
});