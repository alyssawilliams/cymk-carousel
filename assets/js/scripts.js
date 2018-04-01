$(document).ready(function() {
	var timer;
	startTimer(3000);
});

function startTimer(interval) {
	timer = setInterval(play, interval);	
}

function pauseTimer() {
	clearInterval(timer);
	startTimer(3000);
};

// Displays both controls when you hover over the carousel
$('.carouselWrapper').hover(function() {
	$('.carouselControl').addClass('carouselControlActive');
}, function() {
	$('.carouselControl').removeClass('carouselControlActive');
});

// Moves the carousel forward
function play() {
	var nextSlide;

	// If this is the last slide, loop back around to the first slide
	if ($('.carouselSlide.active').is(':last-child')) {
		nextSlide = $('.carouselSlide:first-child');
	}
	else {
		nextSlide = $('.carouselSlide.active').next();
	}

	$('.carouselSlide.active').removeClass('active');
	$('.carouselSlide.active').addClass('active');
	nextSlide.addClass('active');

	// Move the carousel dot along
	$('.carouselDot.active').removeClass('active');
	var nextSlideNumber = nextSlide.data('carouselCount');
	$('.carouselDot[data-carousel-count="' + nextSlideNumber + '"').addClass('active');
};

// Moves the carousel backward
function rewind() {
	var prevSlide;

	// If this is the first slide, go back to the last slide
	if ($('.carouselSlide.active').is(':first-child')) {
		prevSlide = $('.carouselSlide:last-child');
	}
	else {
		prevSlide = $('.carouselSlide.active').prev();
	}

	$('.carouselSlide.active').removeClass('active');
	$('.carouselSlide.active').addClass('active');
	prevSlide.addClass('active');

	// Move the carousel dot along
	$('.carouselDot.active').removeClass('active');
	var prevSlideNumber = prevSlide.data('carouselCount');
	$('.carouselDot[data-carousel-count="' + prevSlideNumber + '"').addClass('active');
};

// Moves the carousel back one slide when you click the left arrow
$('.carouselControl.leftArrow').click(function() {
	pauseTimer();
	rewind();
});

// Moves the carousel forward one slide when you click the right arrow
$('.carouselControl.rightArrow').click(function() {
	pauseTimer();
	play();
});

// Goes to the associated slide when you click on a dot
$('.carouselDot').click(function(event) {
	pauseTimer();

	$('.carouselDot.active').removeClass('active');
	$(this).addClass('active');

	var slideNumber = $(this).data('carouselCount');
	$('.carouselSlide.active').removeClass('active');
	$('.carouselSlide[data-carousel-count="' + slideNumber + '"').addClass('active');
});