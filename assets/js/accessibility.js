$(document.documentElement).keydown(function (event) {
  if (event.keyCode == 37) {
    // Moves the carousel back one slide when you press the left arrow key
    pauseTimer();
    rewind();
    startCarousel();
  } else if (event.keyCode == 39) {
   // Moves the carousel forward one slide when you press the right arrow key
   pauseTimer();
   startCarousel();
  }
});

// Enables touch gestures on mobile
var hammertime = new Hammer($('.carouselWrapper')[0]);

hammertime.on('swipeleft', function() {
  pauseTimer();
  startCarousel();
});

hammertime.on('swiperight', function() {
  pauseTimer();
  rewind();
  startCarousel();
});