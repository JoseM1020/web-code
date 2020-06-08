var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.querySelector(".random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function randomizeColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", randomizeColor);

window.onload = setGradient();
