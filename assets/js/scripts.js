$(document).ready(function() {

 $(".carouselSlide").each(function() {
 	$(this).css("min-width", $('.carouselWrapper').outerWidth());
 });

 startCarousel();
});

var run;

// Moves the carousel forward every 3 seconds
function startCarousel() {
	var speed = 3000;
	run = setInterval('play()', speed);
}

var wrapperWidth = $('.carouselWrapper').outerWidth();
var leftValue = wrapperWidth * (-1);

// Moves the last slide to the first (out of sight) position, so the user can press the back arrow
$('.carouselSlide:first').before($('.carouselSlide:last'));
$('.carouselWrapper').css({'left' : leftValue});


function play() {
	var leftAnimate = parseInt($('.carouselWrapper').css('left')) - wrapperWidth;

	$('.carouselWrapper').animate({'left' : leftAnimate}, 300, function () {
			// Adds the active class to the slide in view
			$('.carouselSlide.active').removeClass('active');
			$('.carouselSlide').eq(2).addClass('active');

			// Adds the active class to the dot that indicates the active slide
			$('.carouselDot.active').removeClass('active');
			var slideNumber = $('.carouselSlide.active').data('carouselCount');
			$('.carouselDot[data-carousel-count="' + slideNumber + '"').addClass('active');

			// Moves the last slide to the beginning of the queue
			$('.carouselSlide:last').after($('.carouselSlide:first'));
			$('.carouselWrapper').css({'left' : leftValue});
	});
}

function rewind() {
	var leftAnimate = parseInt($('.carouselWrapper').css('left')) + wrapperWidth;

	$('.carouselWrapper').animate({'left' : leftAnimate}, 300, function () {
			// Adds the active class to the slide in view
			$('.carouselSlide.active').removeClass('active');
			$('.carouselSlide').eq(0).addClass('active');

			// Adds the active class to the dot that indicates the active slide
			$('.carouselDot.active').removeClass('active');
			var slideNumber = $('.carouselSlide.active').data('carouselCount');
			$('.carouselDot[data-carousel-count="' + slideNumber + '"').addClass('active');

			// Moves the first slide to the beginning of the queue
			$('.carouselSlide:first').before($('.carouselSlide:last'));
			$('.carouselWrapper').css({'left' : leftValue});
	});
}

function pauseTimer() {
	clearInterval(run);
};

$('.carouselControl.rightArrow').click(function() {
	pauseTimer();
	play();
	startCarousel();
});

$('.carouselControl.leftArrow').click(function() {
	pauseTimer();
	rewind();
	startCarousel();
});


 var resizeTimer;

$(window).on('resize', function(e) {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {

		location.reload();

	}, 250);
});