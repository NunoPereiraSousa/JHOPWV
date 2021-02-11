gsap.registerPlugin(ScrollTrigger);

let image__card = document.querySelectorAll(".image__card");
let overlay = document.querySelectorAll(".overlay");
let legend__desktop = document.querySelectorAll(".legend__desktop");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

// let tl = gsap.timeline();

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".landing",
      start: "center center",
      pin: true,
      // markers: true,
      scrub: true
    }
  })
  .to(".scrollable__text", {
    x: "-75%",
    ease: "none"
  });

ScrollTrigger.create({
  trigger: ".landing",
  start: "center center",
  pin: ".landing",
  pinSpacing: false,
  markers: true
});

// ScrollTrigger.create({
//   trigger: ".landing",
//   start: "top top",
//   pin: ".second",
//   end: "bottom top",
//   pinSpacing: false,
//   markers: true
// });

// gsap.to(".second", {
//   scrollTrigger: {
//     trigger: ".landing",
//     start: "bottom bottom",
//     pin: false,
//     pinSpacing: false
//   },
//   y: "0%",
//   duration: 0.4
// });

// gsap.to([".fifth", ".sixth"], {
//   scrollTrigger: {
//     trigger: ".fifth",
//     start: "150% bottom",
//     end: "bottom bottom"
//     // markers: true
//   },
//   delay: 1,
//   backgroundColor: "#000000",
//   duration: 0.4
// });

one.addEventListener("mouseenter", e => {
  gsap.to(overlay[0], {
    height: "26%"
  });
  gsap.to(legend__desktop[0], {
    bottom: "0%",
    opacity: 1
  });
});

one.addEventListener("mouseleave", e => {
  gsap.to(overlay[0], {
    height: "0%"
  });
  gsap.to(legend__desktop[0], {
    bottom: "-15%",
    opacity: 0
  });
});

two.addEventListener("mouseenter", e => {
  gsap.to(overlay[1], {
    height: "26%"
  });
  gsap.to(legend__desktop[1], {
    bottom: "0%",
    opacity: 1
  });
});

two.addEventListener("mouseleave", e => {
  gsap.to(overlay[1], {
    height: "0%"
  });
  gsap.to(legend__desktop[1], {
    bottom: "-15%",
    opacity: 0
  });
});

three.addEventListener("mouseenter", e => {
  gsap.to(overlay[2], {
    height: "26%"
  });
  gsap.to(legend__desktop[2], {
    bottom: "0%",
    opacity: 1
  });
});

three.addEventListener("mouseleave", e => {
  gsap.to(overlay[2], {
    height: "0%"
  });
  gsap.to(legend__desktop[2], {
    bottom: "-15%",
    opacity: 0
  });
});
