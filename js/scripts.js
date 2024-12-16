$(document).ready(function () {
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#header');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu').click(function () {
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function () {
		$('body').removeClass('menu-opened');
	});//mobile-menu
	
	$('#main-nav li').each(function(){
		if ($(this).find('.drop').length){
			$(this).prepend('<span class="opener"></span>');
			$(this).addClass('dropdown');
		}
	});//main-nav-dropdown

	$('#main-nav .opener').click(function(){
		if ($(this).parent().hasClass('opened')) {
			$(this).parent().removeClass('opened');
			$(this).siblings('.drop').stop().slideUp(300);
		} else{
			$(this).parent().addClass('opened').siblings('.opened').removeClass('opened').children('.drop').stop().slideUp(300);
			$(this).siblings('.drop').stop().slideDown(300);
		};
		return false;
	});//main-nav-accordion
	
	$('.bg-img').each(function () {
		if ($(this).find('> img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		};
	});//background-image
	
	$('.top-nav').clone().insertBefore('.nav-holder #main-nav').addClass('visible-sm visible-xs').removeClass('hidden-sm hidden-xs');
	
	
	
	$('.tile-box').matchHeight();
	
	$('.customer-slider').slick({
		infinite: false,
		arrows: false,
		initialSlide: 1
	});
	initTabs();
	$('.frame-height, .frame-height-2').matchHeight();
}); //ready


$(document).on('resize', function(){
	if($(window).width() > 991){
		$('.frame-height, .frame-height-2').matchHeight();
	}
});
function initTabs(){
	$('.tabs').each(function () {
		var $this = $(this);
		$this.find('.tab').hide();
		$($this.find('.active > a').attr('href')).show();
		$this.find('.tabnav a').click(function () {
			if (!$(this).parent().hasClass('active')) {
				$(this).parent().addClass('active').siblings('li').removeClass('active');
				$($(this).attr('href')).fadeIn(300).siblings('.tab').hide();
			}
			return false;
		});
	});
}