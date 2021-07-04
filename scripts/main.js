window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
