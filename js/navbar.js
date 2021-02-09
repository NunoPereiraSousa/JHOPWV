let hamburger = document.querySelector(".hamburger");
let nav__items = document.querySelector(".nav__items");
let lines = document.querySelectorAll(".lines");

hamburger.addEventListener("click", () => {
  nav__items.classList.toggle("opened");

  hamburger.classList.toggle("cross");

  //   lines.forEach(line => {
  //     line.classList.toggle("cross");
  //   });

  //   if (nav__items.classList.contains("opened")) {
  //     nav__items.style.display = "block";
  //   } else {
  //     nav__items.style.display = "none";
  //   }
});
