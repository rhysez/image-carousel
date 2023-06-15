const imageContainer = document.getElementById("imageContainer");
const planetMain = document.getElementById("planetMain");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const selector0 = document.getElementById("selector0");
const selector1 = document.getElementById("selector1");
const selector2 = document.getElementById("selector2");

const planetRed = "./images/planetred.jpg";
const planetBlue = "./images/planetblue.jpg";
const planetMoon = "./images/moon.jpg";

let currentPlanet = 0;
const planets = [planetRed, planetBlue, planetMoon];
planetMain.src = planets[currentPlanet];

function slideForward() {
  if (currentPlanet === 2) {
    return;
  }
  ++currentPlanet;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
}

function slideBackward() {
  if (currentPlanet === 0) {
    return;
  }
  --currentPlanet;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
}

function selectPlanet(selectedPlanet) {
  currentPlanet = selectedPlanet;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
}

function changeImage() {
  planetMain.src = planets[currentPlanet];
  currentPlanet = currentPlanet + 1;
  if (currentPlanet === planets.length){
    currentPlanet = 0;
  }
}

window.onload = function(){
  setInterval(function(){
    changeImage();}, 2000);
}

arrowLeft.addEventListener("click", () => { slideBackward() });
arrowRight.addEventListener("click", () => { slideForward() });

selector0.addEventListener("click", () => { selectPlanet(0) });
selector1.addEventListener("click", () => { selectPlanet(1) });
selector2.addEventListener("click", () => { selectPlanet(2) });
