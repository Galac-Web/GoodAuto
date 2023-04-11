function toggleClass() {
  nav.classList.toggle("none"); // Переключаем класс hide
  phone.classList.toggle("none");
}

//SLIDER

let offset = 0; // from left
let page = 0;
let x;
let xStart;
let width;
const sliderLine = document.querySelector(".sliderLine");
// const sliderList = document.querySelectorAll(".dot");

window.addEventListener("resize", init);
init();

const el = document.getElementById("sliderLine");
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchend", handleEnd);

document.querySelector(".next").addEventListener("click", Next);
document.querySelector(".previous").addEventListener("click", Prev);

function handleMove(event) {
  x = event.touches[0].clientX;
}
function handleStart(event) {
  xStart = event.touches[0].clientX;
}
function handleEnd() {
  if (x < xStart) {
    Next();
  } else {
    Prev();
  }
}
function Next() {
  offset -= width + 40;
  page++;
  if (offset <= -width * 6) {
    offset = 0;
    page = 0;
    // sliderList[4].classList.toggle("activeDot");
  } else {
    // sliderList[page - 1].classList.toggle("activeDot");
  }
  // sliderList[page].classList.toggle("activeDot");
  sliderLine.style.left = offset + "px";
}
function Prev() {
  offset += width + 40;
  page--;
  if (offset > 0) {
    offset = (-width + 40) * 5;
    page = 5;
    // sliderList[0].classList.toggle("activeDot");
  } else {
    //  sliderList[page + 1].classList.toggle("activeDot");
  }
  sliderLine.style.left = offset + "px";
  // sliderList[page].classList.toggle("activeDot");
}
function init() {
  width = document.querySelector(".sliderPage").offsetWidth;
  console.log(width);
}
