$(document.documentElement).keydown(function (event) {
  if (event.keyCode == 37) {
    // Moves the carousel back one slide when you press the left arrow key
    backOne();
  } else if (event.keyCode == 39) {
   // Moves the carousel forward one slide when you press the right arrow key
   forwardOne()
  }
});

// Enables touch gestures on mobile
var hammertime = new Hammer($('.cymkcarousel')[0]);

hammertime.on('swipeleft', function() {
  backOne();
});

hammertime.on('swiperight', function(ev) {
  forwardOne();
});