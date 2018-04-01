// Displays both controls when you hover over the carousel
$('.carouselWrapper').hover(function() {
	$('.carouselControl').addClass('carouselControlActive');
}, function() {
	$('.carouselControl').removeClass('carouselControlActive');
});

// Moves the carousel back one slide when you click the left arrow
$('.carouselControl.leftArrow').click(function() {
	var prevSlide;

	if ($('.carouselSlide.active').is(':first-child')) {
		prevSlide = $('.carouselSlide:last-child');
	}
	else {
		prevSlide = $('.carouselSlide.active').prev();
	}

	$('.carouselSlide.active').removeClass('active');
	$('.carouselSlide.active').addClass('active');
	prevSlide.addClass('active');
});

// Moves the carousel forward one slide when you click the right arrow
$('.carouselControl.rightArrow').click(function() {
	play();
});

// Moves the carousel forward
function play() {
	var nextSlide;

	if ($('.carouselSlide.active').is(':last-child')) {
		nextSlide = $('.carouselSlide:first-child');
	}
	else {
		nextSlide = $('.carouselSlide.active').next();
	}

	$('.carouselSlide.active').removeClass('active');
	$('.carouselSlide.active').addClass('active');
	nextSlide.addClass('active');
}
