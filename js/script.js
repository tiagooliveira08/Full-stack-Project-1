$(function() {


	var toggleMenu = $(".portfolio__header__menu-toggle");
	var toggleAnimation = $(".menu__toggle");
	var toggleList = $(".portfolio__header__navigation");
	var toggleheader = $(".portfolio__header");
	var menuList = $(".portfolio__header__navigation");
	var heightHeader;
	var isActiver = false;
	console.log(isActiver);

	console.log($(toggleheader).offset().top);
	var positionOfTop;
	console.log(toggleMenu);
	$(toggleMenu).on("click", function() {
		heightHeader = $(".portfolio__header").height();
		$(menuList).css("top",+heightHeader);
		$(toggleList).toggleClass("portfolio__header__navigation--active");
		$(toggleAnimation).toggleClass("menu-goggle__item--active");
		isActiver = !isActiver;

	});

	$(window).scroll(function() {
		positionOfTop = $(".portfolio__header").offset().top;
		if(positionOfTop > 140 && isActiver != true) {
			$(".portfolio__header").addClass("portfolio__header--scrolled");
			$(".portfolio__header__navigation__list__item").addClass("portfolio__header__navigation__list__item--desktop");
		}
		else {
			$(".portfolio__header").removeClass("portfolio__header--scrolled");
			$(".portfolio__header__navigation__list__item").removeClass("portfolio__header__navigation__list__item--desktop");
		}
	})

	//sistema slider

	var currentSlider = 0;
	var delay = 5;
	var sliderCount = $(".current-slider").length -1;

	initSlider();
	changeSlider();

	function initSlider() {
		$(".current-slider").hide();
		$(".current-slider").eq(0).show();
	}

	function changeSlider() {
		setInterval(function() {
			$(".current-slider").eq(currentSlider).stop().fadeOut(1000);
			currentSlider++;
			if(currentSlider > sliderCount) 
				currentSlider = 0;
			$(".current-slider").eq(currentSlider).stop().fadeIn(1000);
			console.log(currentSlider);
		},delay * 1000)
	}


});