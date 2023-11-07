const DOMSelectors = {
  form: document.getElementById("form"),
  name: document.getElementById("name"),
  country: document.getElementById("country"),
  image: document.getElementById("image"),
  button: document.getElementById("btn"),
  cards: document.getElementById("display"),
};
function add() {
  DOMSelectors.cards.insertAdjacentHTML(
    "beforeend",
    `<div class="cards">
        <h2>${DOMSelectors.name.value}</h2>
        <h3>${DOMSelectors.country.value}</h3>
        <div>
        <img class="card-img" src= "${DOMSelectors.image.value}" alt="image">
        </div>
        <button class ="remove">Remove</button>
    </div>`
  );
}

function remove() {
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", function (button) {
      button.target.parentElement.remove();
    });
  });
}

function clearInputs() {
  DOMSelectors.name.value = "";
  DOMSelectors.country.value = "";
  DOMSelectors.image.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
  remove();
  clearInputs();
});
