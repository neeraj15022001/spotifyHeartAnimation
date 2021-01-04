let isEnabled = false;
const heart = document.getElementById("icon_heart");
const rings = document.querySelectorAll(".ring");
function changeState() {
  isEnabled = !isEnabled;
  heart.style.color = isEnabled ? "#00c24a" : "white";
  heart.style.animation = isEnabled
    ? "popUp 0.5s ease-in-out "
    : "shake 0.5s ease-in-out ";
  if (isEnabled) {
    spreadHearts();
  }
  for (let i = 0; i < rings.length; i++) {
    rings[i].style.animation = isEnabled
      ? `expand 0.3s linear 0.${i}s`
      : "none";
  }
}
function spreadHearts() {
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}
function createHeart() {
  const parentElement = document.getElementById("icon_heart");
  const elementToBeAdded = document.createElement("i");
  elementToBeAdded.className = "bi bi-heart-fill inner-icon";
  elementToBeAdded.style.left = `${
    Math.random() * parentElement.offsetWidth
  }px`;
  elementToBeAdded.style.top = `${Math.random() * parentElement.offsetWidth}px`;
  elementToBeAdded.style.animation = `fly 0.3s linear ${(
    Math.random() * (0.3 - 0.2) +
    0.2
  ).toFixed(1)}s forwards`;
  parentElement.appendChild(elementToBeAdded);
}
