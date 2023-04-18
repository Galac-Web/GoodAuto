function toggleClass() {
  nav.classList.toggle("none"); // Переключаем класс hide
}
window.addEventListener("resize", init);
init();

function init() {
  ScreenWidth = document.querySelector(".header").offsetWidth;
  if (ScreenWidth <= 768) {
    nav.classList.toggle("none");
  }
}
