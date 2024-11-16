const div = document.querySelector(".todolist");
let ul = document.querySelector(".ulList");
const form = document.querySelector(".form");
let inputData = document.querySelector("input[type='text']");
const submitBtn = document.querySelector("input[type='submit']");
const span = document.querySelector("span");
const doneBtn = document.querySelector(".done");
const removeBtn = document.querySelector(".remove");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let createLi = document.createElement("li");
  let inpVal = inputData.value;
  let liInner = `
  <span>${inpVal}</span>
  <div class="button">
  <button class="btn done">Done ✅</button>
  <button class="btn remove">Remove ❌</button>
  <button class="btn undone">Undone 🔄️</button>`;
  createLi.innerHTML = liInner;
  createLi.classList.add("todo");
  createLi.classList.add("flex");
  createLi.classList.add("jcC");
  ul.prepend(createLi);
  inputData.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    e.target.parentNode.previousElementSibling.style.textDecoration =
      "line-through";
  } else if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains("undone")) {
    if (
      (e.target.parentNode.previousElementSibling.style.textDecoration =
        "line-through")
    ) {
      e.target.parentNode.previousElementSibling.style.textDecoration = "none";
    }
  }
});
