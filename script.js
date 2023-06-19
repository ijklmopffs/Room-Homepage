const elements = document.querySelectorAll(".one");
const prev = document.querySelectorAll(".left");
const next = document.querySelectorAll(".right");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".links");
const close = document.querySelector(".close");
let currentIndex = 0;

hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

prev.forEach((button) => {
  button.addEventListener("click", () => {
    elements[currentIndex].classList.add("none");
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;
    elements[currentIndex].classList.remove("none");
  });
});

next.forEach((button) => {
  button.addEventListener("click", () => {
    elements[currentIndex].classList.add("none");
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].classList.remove("none");
  });
});
