function accordion() {
	$('.accordion__link').click(function (e){
		e.preventDefault();
		if($(this).hasClass('accordion__link-is__active')) {
			$(this).removeClass('accordion__link-is__active');
			$(this).addClass('no__active');
			$(this).siblings('.accordion__content').slideUp(200);
			$(this).find('.accordion__icon').removeClass('active');
		} else {
			$(this).removeClass('accordion__link-no__active');
			$(this).addClass('accordion__link-is__active');
			$(this).find('.accordion__icon').addClass('active');
			$(this).siblings('.accordion__content').slideDown(200);
		}
	})
}

module.exports = accordion;