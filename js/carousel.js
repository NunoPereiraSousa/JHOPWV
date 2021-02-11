//
//   Variables
//
//////////////////////////////////////////////////////////////////////

// Play with this value to change the speed
// let tickerSpeed = 6;

let flickity = null;
const slideshowEl = document.querySelector(".js-slideshow");

//
//   Functions
//
//////////////////////////////////////////////////////////////////////

const update = () => {
  if (isPaused) return;
  if (flickity.slides) {
    // flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
    flickity.selectedIndex = flickity.dragEndRestingSelect();
    flickity.updateSelectedSlide();
    flickity.settle(flickity.x);
  }
  window.requestAnimationFrame(update);
};

//
//   Create Flickity
//
//////////////////////////////////////////////////////////////////////

flickity = new Flickity(slideshowEl, {
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
});
flickity.x = 0;

//
//   Add Event Listeners
//
//////////////////////////////////////////////////////////////////////

flickity.on("dragStart", () => {
  isPaused = true;
});

//
//   Start Ticker
//
//////////////////////////////////////////////////////////////////////

update();
