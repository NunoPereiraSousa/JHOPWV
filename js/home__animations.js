gsap.registerPlugin(ScrollTrigger);

let image__card = document.querySelectorAll(".image__card");
let overlay = document.querySelectorAll(".overlay");
let legend__desktop = document.querySelectorAll(".legend__desktop");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");

gsap.to(".second", {
  scrollTrigger: {
    trigger: ".second",
    start: "top bottom",
    end: "top top",
    pin: ".landing",
    pinSpacing: false,
    markers: true
  },
  duration: 0.4
});

document.querySelector(".landing").addEventListener("mousemove", e => {
  parallaxIt(e, ".landing__circle", 200);
  parallaxIt(e, ".landing__circle2", -200);
  parallaxIt(e, ".landing__circle3", 100);
});

function parallaxIt(e, target, movement) {
  let $this = $(".landing");
  let relX = e.pageX - $this.offset().left;
  let relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement
  });
}

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
