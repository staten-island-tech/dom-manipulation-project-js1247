// console.log (DOMSelectors);
// const text = document.querySelector(".title")
// const changeColor = document.querySelector(".changeColor")

// text.style.changeColor

// text.classList.add("change");

// changeColor.addEventListener('click', function() {
//     text.classList.toggle('change');
// })
// const userList = document.querySelectorAll(".name-list");
// console.log(userList);

const DOMSelectors = {
    form: document.getElementById("form"),
    name: document.getElementById("name"),
    country: document.getElementById("country"),
    image: document.getElementById("image"),
    button: document.getElementById("btn"),
}
DOMSelectors.button.addEventListener("submit", function (event) {
  event.preventDefault();
  createCard();
  eraseInfo();
  clearCard();
});
function makecard() {
  let name = DOMSelectors.name.value;
  let country = DOMSelectors.country.value;
  let image = DOMSelectors.image.value;
  DOMSelectors.box.insertAdjacentHTML;
}
function eraseInfo() {
  DOMSelectors.name.value = "";
  DOMSelectors.country.value = "";
  DOMSelectors.image.value = "";
}
