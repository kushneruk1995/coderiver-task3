function hamburger() {
	$(".hamburger-icon").click(function() {
		$('.hamburger').toggleClass("hamburger-open");
		$('.wrapper__blur').toggleClass("wrapper__blur-open");
	});
	$(".hamburger__menu-list").click(function() {
		$(this).find('.hamburger__nav').toggleClass('open');
	});
}

module.exports = hamburger;