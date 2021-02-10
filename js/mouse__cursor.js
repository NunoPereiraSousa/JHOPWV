let cursor = document.querySelector(".cursor");
let image__one = document.querySelector(".one");

window.addEventListener("mousemove", mouseCursor);
// cursor.style.opacity = 0;

function mouseCursor(e) {
  cursor.style.top = e.pageY - cursor.offsetWidth / 2 + "px";
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
}
image__one.addEventListener("mouseover", () => {
  cursor.classList.add("image__one");
});

image__one.addEventListener("mouseleave", () => {
  cursor.classList.remove("image__one");
});
