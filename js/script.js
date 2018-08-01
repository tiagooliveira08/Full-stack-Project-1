$(function() {


	var toggleMenu = $(".portfolio__header__menu-toggle");
	var toggleAnimation = $(".menu__toggle");
	var toggleList = $(".portfolio__header__navigation");
	var toggleheader = $(".portfolio__header");
	var menuList = $(".portfolio__header__navigation");
	var heightHeader;


	console.log($(toggleheader).offset().top);
	var positionOfTop;
	console.log(toggleMenu);
	$(toggleMenu).on("click", function() {
		heightHeader = $(".portfolio__header").height();
		$(menuList).css("top",+heightHeader);
		$(toggleList).toggleClass("portfolio__header__navigation--active");
		$(toggleAnimation).toggleClass("menu-goggle__item--active");
	});

	$(window).scroll(function() {
		positionOfTop = $(".portfolio__header").offset().top;
		if(positionOfTop > 140) {
			$(".portfolio__header").addClass("portfolio__header--scrolled");
		}
		else {
			$(".portfolio__header").removeClass("portfolio__header--scrolled");
		}
	})

});