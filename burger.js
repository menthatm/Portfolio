const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

menu.addEventListener("click", () => {
  burger.classList.remove("active");
  nav.classList.remove("active");
});
