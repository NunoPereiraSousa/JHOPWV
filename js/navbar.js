let nav = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger");
let nav__items = document.querySelector(".nav__items");
let lines = document.querySelectorAll(".lines");

hamburger.addEventListener("click", () => {
  nav__items.classList.toggle("opened");

  hamburger.classList.toggle("cross");
});

let previous__scroll__pos = window.pageYOffset;
let nav__height = `${nav.offsetHeight}`;

// window.onscroll = () => {
//   let current__scroll__pos = window.pageYOffset;
//   if (previous__scroll__pos > current__scroll__pos) {
//     nav.style.top = "0";
//   } else {
//     nav.style.top = `-${nav__height}px`;
//   }
//   previous__scroll__pos = current__scroll__pos;
// };
