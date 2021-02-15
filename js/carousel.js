let isPaused = true;
let flickity = null;
const slideshowEl = document.querySelector(".js-slideshow");

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

flickity = new Flickity(slideshowEl, {
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
});

flickity.on("dragStart", () => {
  isPaused = true;
});

update();
