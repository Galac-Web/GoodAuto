let list = document.getElementsByClassName("catalogList");
let card = document.getElementsByClassName("catalogCard");
let img = document.getElementsByClassName("catalogImg");
let controls = document.getElementsByClassName("catalogControls");
let control = document.getElementsByClassName("catalogControl");
let controlSvg = document.getElementsByClassName("catalogControlSvg");
let controltext = document.getElementsByClassName("catalogControlText");
let searchControl = document.getElementsByClassName("searchControl");
let favoriteControl = document.getElementsByClassName("favoriteControl");
let info = document.getElementsByClassName("catalogInfo");
let right = document.getElementsByClassName("catalogIRight");
let left = document.getElementsByClassName("catalogILeft");
let textBr = document.getElementsByClassName("catalogITextBR");
//   let leftContainer = document.getElementsByClassName("catalogILeftContainer");
let price = document.getElementsByClassName("catalogIPrice");

function largeCards() {
  list[0].style.display = "block";

  for (var i = 0, len = card.length; i < len; i++) {
    card[i].style["width"] = 100 + "%";
    card[i].style["min-height"] = "303px";
    card[i].style["display"] = "flex";
    card[i].style["flex-direction"] = "row-reverse";
    card[i].style.setProperty("animation", "unset");
    img[i].style["width"] = 29 + "%";
    img[i].style["height"] = 57.8 + "%";
    img[i].style["margin-left"] = "80px";
    // img[i].style["margin-top"] = "68px";
    // img[i].style["margin-bottom"] = "60px";

    searchControl[i].style["display"] = "none";
    favoriteControl[i].style["background-color"] = "#cecece";

    info[i].style["display"] = "flex";
    info[i].style["flex-direction"] = "column";

    right[i].style["flex-direction"] = "row";
    right[i].style["margin-top"] = "20px";
    right[i].style["gap"] = "20px";
    right[i].style["max-width"] = "unset";

    left[i].style["display"] = "flex";
    left[i].style["flex-direction"] = "row";
    left[i].style["justify-content"] = "space-between";
    left[i].style["align-content"] = "center";
    left[i].style["max-width"] = "80%";

    textBr[i].style["display"] = "none";

    price[i].style["margin-top"] = 9 + "px";
  }
  for (var i = 0, len = controls.length; i < len; i++) {
    controls[i].style["left"] = "unset";
    controls[i].style["top"] = "unset";
    controls[i].style["justify-content"] = "left";
    controls[i].style["margin-left"] = "20px";
    controls[i].style["min-height"] = "64px";
    controls[i].style["min-height"] = "64px";
    controls[i].style["width"] = "48.2%";
  }

  for (var i = 0, len = control.length; i < len; i++) {
    control[i].style["transform"] = "unset";
    control[i].style["width"] = "50%";
    if (!control[i].classList.value.includes("searchControl")) {
      control[i].style["display"] = "flex";
      control[i].style["justify-content"] = "center";
      control[i].style["align-items"] = "center";
      control[i].style["gap"] = "10px";
    }
  }
  for (var i = 0, len = controlSvg.length; i < len; i++) {
    controlSvg[i].style["transform"] = "unset";
    controltext[i].style["display"] = "block";
  }
}
function defaultCards() {
  list[0].removeAttribute("style");
  for (var i = 0, len = card.length; i < len; i++) {
    card[i].removeAttribute("style");
    img[i].removeAttribute("style");
    searchControl[i].removeAttribute("style");
    favoriteControl[i].removeAttribute("style");
    info[i].removeAttribute("style");
    right[i].removeAttribute("style");
    left[i].removeAttribute("style");
    textBr[i].removeAttribute("style");
    price[i].removeAttribute("style");
  }
  for (var i = 0, len = controls.length; i < len; i++) {
    controls[i].removeAttribute("style");
  }
  for (var i = 0, len = control.length; i < len; i++) {
    control[i].removeAttribute("style");
  }
  for (var i = 0, len = controlSvg.length; i < len; i++) {
    controlSvg[i].removeAttribute("style");
    controltext[i].removeAttribute("style");
  }
}

function filterApperance() {
  let credit = document.getElementsByClassName("creditForm");
  let ddl = document.getElementById("credit-select");
  let selectedValue = ddl.options[ddl.selectedIndex].value;
  if (selectedValue !== "") {
    credit[0].style["display"] = "flex";
    credit[0].style["flex-direction"] = "column";
  }
}

const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.getElementsByClassName("creditRangePrice");
