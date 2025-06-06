const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const bobbel = document.getElementById("bobbel_sprite1");

  bobbel.addEventListener("click", function () {
    bobbel.classList.add("bobbel-forsvind");

    // Vent til animationen er færdig, så fjern den
    setTimeout(function () {
      bobbel.remove();
    }, 500); // skal matche CSS-transition: 0.5s
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const bobbel = document.getElementById("bobbel_sprite2");

  bobbel.addEventListener("click", function () {
    bobbel.classList.add("bobbel-forsvind");

    // Vent til animationen er færdig, så fjern den
    setTimeout(function () {
      bobbel.remove();
    }, 500); // skal matche CSS-transition: 0.5s
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const bobbel = document.getElementById("bobbel_sprite3");

  bobbel.addEventListener("click", function () {
    bobbel.classList.add("bobbel-forsvind");

    // Vent til animationen er færdig, så fjern den
    setTimeout(function () {
      bobbel.remove();
    }, 500); // skal matche CSS-transition: 0.5s
  });
});
