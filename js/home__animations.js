let image__card = document.querySelectorAll(".image__card");
let overlay = document.querySelectorAll(".overlay");
let legend__desktop = document.querySelectorAll(".legend__desktop");

let tl = gsap.timeline();

image__card[0].addEventListener("mouseenter", e => {
  gsap.to(overlay[0], {
    opacity: 1,
    durations: 0.75
  });
  gsap.to(legend__desktop[0], {
    opacity: 1,
    durations: 0.75
  });
});
image__card[0].addEventListener("mouseleave", e => {
  gsap.to(legend__desktop[0], {
    opacity: 0,
    durations: 0.75
  });
  gsap.to(overlay[0], {
    opacity: 0,
    durations: 0.75
  });
});

image__card[1].addEventListener("mouseenter", e => {
  gsap.to(overlay[1], {
    opacity: 1,
    durations: 0.75
  });
  gsap.to(legend__desktop[1], {
    opacity: 1,
    durations: 0.75
  });
});
image__card[1].addEventListener("mouseleave", e => {
  gsap.to(legend__desktop[1], {
    opacity: 0,
    durations: 0.75
  });
  gsap.to(overlay[1], {
    opacity: 0,
    durations: 0.75
  });
});

image__card[2].addEventListener("mouseenter", e => {
  gsap.to(overlay[2], {
    opacity: 1,
    durations: 0.75
  });
  gsap.to(legend__desktop[2], {
    opacity: 1,
    durations: 0.75
  });
});
image__card[2].addEventListener("mouseleave", e => {
  gsap.to(legend__desktop[2], {
    opacity: 0,
    durations: 0.75
  });
  gsap.to(overlay[2], {
    opacity: 0,
    durations: 0.75
  });
});
