const elements = document.querySelectorAll(".one");
const prev = document.querySelectorAll(".left");
const next = document.querySelectorAll(".right");
const hamburger = document.querySelectorAll(".hamburger");
const menu = document.querySelectorAll(".links");
const close = document.querySelectorAll(".close");
let currentIndex = 0;

hamburger.forEach((ham) => {
  ham.addEventListener("click", function () {
    menu.forEach((menu) => {
      menu.classList.add("active");
    });
  });
});

close.forEach((close) => {
  close.addEventListener("click", () => {
    menu.forEach((menu) => {
      menu.classList.remove("active");
    });
  });
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
