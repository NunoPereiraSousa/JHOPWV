gsap.registerPlugin(ScrollTrigger);

let image__card = document.querySelectorAll(".image__card");
let overlay = document.querySelectorAll(".overlay");
let legend__desktop = document.querySelectorAll(".legend__desktop");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".landing",
//     start: "top top",
//     pin: true,
//     // markers: true,
//     scrub: true
//   }
// });
// tl.to(".scrollable__text", {
//   x: "-75%",
//   ease: "none"
// });

// ScrollTrigger.create({
//   trigger: ".second",
//   start: "top top",
//   end: "bottom bottom",
//   pin: ".landing"
// });

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    scrub: true,
    start: "top top",
    end: "bottom",
    pin: true,
    markers: true
  }
});
t1.to(".scrollable__text", {
  x: "-75%",
  ease: "none",
  onComplete: () => {
    ScrollTrigger.create({
      trigger: ".second",
      start: "top top",
      end: "bottom bottom",
      pin: ".second",
      pinSpacing: false
    });
  }
});

// keep at top

// gsap.to(".second", {
//   scrollTrigger: {
//     trigger: ".second",
//     start: "30% bottom"
//   }
// });

// gsap.to(".second", {
//   scrollTrigger: {
//     trigger: ".second",
//     start: "30% bottom",
//     end: "top top",
//     pin: ".landing",
//     pinSpacing: false
//   },
//   y: "0%",
//   stagger: 0.2,
//   duration: 0.4
// });

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
