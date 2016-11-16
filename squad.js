// whether the slideshow is paused or not
var paused = false;

// the counter variable that keeps
// track of which player you are showing
var counter = 1;

// when you click the big image 
// toggle pausing. Set paused to 
// not paused, i.e. if it is paused
// set it to not paused, if it is 
// not paused set it to paused
function stopOrResumeSlides() {
	paused = !paused;
}

// go forward one in the slides
function changeSlides() {
	// go forward one in the counter
	counter = counter + 1;
	// if we are above 23 (the last
	// player) loop round to 1 (the
	// first player)
	if(counter > 23) {
		counter = 1;
	}
	// virtually click on the current
	// image to load it into the big image
	$("#player" + counter).click();
}

// set value of the current counter
function setCurrentCounter(newCounter) {
	counter = newCounter;
}

// set interval makes it move 
// forward every 3 second
setInterval(function () {
	// first check if it is paused
	if(!paused) {
		// change to next slide
		changeSlides();
	};
}, 3000);
