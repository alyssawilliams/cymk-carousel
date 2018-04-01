$(document.documentElement).keyup(function (event) {
  if (event.keyCode == 37) {
    // Moves the carousel back one slide when you press the left arrow key
    rewind();
  } else if (event.keyCode == 39) {
   // Moves the carousel forward one slide when you press the right arrow key
   play();
  }
});