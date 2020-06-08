/*
 * Init Sequence
 */
// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

var options = {
	// Place your Sequence options here to override defaults
	// See: https://sequencejs.com/documentation/#options
	keyNavigation: true,
	fadeStepWhenSkipped: false,
};

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);

/*
 * Multimedia controls
 */
const playButton = document.querySelector(".play-audio");
const playButtonIcon = document.querySelector(".play-audio .wsu-icon");
const audioToControl = document.querySelector(".audio-overlay");

playButton.addEventListener("click", function () {
	if (audioToControl.paused) {
		audioToControl.play();
		playButtonIcon.classList.remove("wsu-i-play");
		playButtonIcon.classList.add("wsu-i-pause");
	} else {
		audioToControl.pause();
		playButtonIcon.classList.remove("wsu-i-pause");
		playButtonIcon.classList.add("wsu-i-play");
	}
});

/*
 * Timeline
 */
const timeline = document.querySelector(".timeline");
const timelineProgress = document.querySelector(".timeline-progress");

// Set Initial progress bar width, based on data-progress attribute
timelineProgress.style.width = timelineProgress.dataset.progress + "%";

// Create observer
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
	// Use traditional 'for loops' for IE 11
	for (let mutation of mutationsList) {
		if (mutation.type === "attributes") {
			timelineProgress.style.width =
				timelineProgress.dataset.progress + "%";
		}
	}
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(timelineProgress, config);

/*
 * Change progress bar based on current step
 */
const sequenceSteps = document.querySelectorAll(".step");
const sequenceNumberOfSteps = sequenceSteps.length;

mySequence.nextPhaseStarted = function (id, sequence) {
	timelineProgress.dataset.progress = (id / sequenceNumberOfSteps) * 100;
};

/*
 * Gallery Interactions
 */
const gallery_items = document.querySelectorAll(".gallery-item");
const gallery_screen = document.getElementById("screen-image");

gallery_items.forEach((item) => {
	item.addEventListener("click", (e) => {
		gallery_screen.src = item.firstElementChild.src;
	});
});
