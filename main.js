import "./style.css";

let container = 0;

const cards = document.querySelectorAll(".cards");
function cardClick(ev) {
  const target = ev.target;
  target.classList.add("clicked");
  console.log(target);
}

function reset() {
  cards.forEach((card) => card.classList.remove("clickend"));
}

cards.forEach((card) => {
  card.addEventListener("click", cardClick);
});
