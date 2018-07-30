$(function() {


	var toggleMenu = $(".portfolio__header__menu-toggle");
	var toggleList = $(".portfolio__header__navigation");
	var toggleheader = $(".portfolio__header");
	console.log(toggleMenu);
	$(toggleMenu).on("click", function() {
		$(toggleList).toggleClass("portfolio__header__navigation--active");
		
	});

});