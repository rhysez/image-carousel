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
    currentPlanet = 0;
  }
  ++currentPlanet;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
}

function slideBackward() {
  if (currentPlanet === 0) {
    currentPlanet = 2;
  }
  --currentPlanet;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
}

function highlightSelector() {
  if (currentPlanet === 0) {
    selector0.style.border = "solid 1px black";
    selector1.style.border = "none";
    selector2.style.border = "none";
  } else if (currentPlanet === 1) {
    selector0.style.border = "none";
    selector1.style.border = "solid 1px black";
    selector2.style.border = "none";
  } else if (currentPlanet === 2) {
    selector0.style.border = "none";
    selector1.style.border = "none";
    selector2.style.border = "solid 1px black";
  }
}


arrowLeft.addEventListener("click", () => {
  slideBackward();
  highlightSelector();
});

arrowRight.addEventListener("click", () => {
  slideForward();
  highlightSelector();
});

selector0.addEventListener("click", () => {
  currentPlanet = 0;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
  highlightSelector();
});

selector1.addEventListener("click", () => {
  currentPlanet = 1;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
  highlightSelector();
});

selector2.addEventListener("click", () => {
  currentPlanet = 2;
  planetMain.src = planets[currentPlanet];
  console.log(currentPlanet);
  highlightSelector();
});
