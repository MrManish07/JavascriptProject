let earnAmInp = document.querySelector(".earn input[type='number']");
let earnTxtInp = document.querySelector(".earn input[type='text']");
let earnAddbtn = document.querySelector(".earn input[type='submit']");
let expAmInp = document.querySelector(".exp input[type='number']");
let expTxtInp = document.querySelector(".exp input[type='text']");
let expAddbtn = document.querySelector(".exp input[type='submit']");
let revAm = document.querySelector(".txtRevAm");
let expAm = document.querySelector(".txtExpAm");
let balAm = document.querySelector(".txtBalAm");
let incAmSort = document.querySelector(".incrAmt");
let decAmSort = document.querySelector(".decrAmt");
let incAlpSort = document.querySelector(".incrAlp");
let decAlpSort = document.querySelector(".decrAlp");
let editBtn = document.querySelector(".editBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let liList = document.querySelector(".listOfBudget");
let ulList = document.querySelector(".ulList");
let objVal = {};

let earningValue = 0;
let expenseValue = 0;
let firstBtn = () => {
  let valueEarn = +earnAmInp.value;
  let valueEarnTxt = earnTxtInp.value;
  earningValue += valueEarn;
  revAm.textContent = earningValue;
  let createdLi = document.createElement("li");
  createdLi.classList.add("listOfBudget");
  createdLi.innerHTML = `<span class="cat">${valueEarnTxt}</span>
    <span class="cr">+${valueEarn}</span>
    <div class="listBtn">
        <button class="editBtn">🖋️</button>
        <button class="deleteBtn">🗑️</button>`;
  ulList.prepend(createdLi);
  earnAmInp.value = "";
  earnTxtInp.value = "";
};
let secBtn = () => {
  let blankArr = [];
  let valueExp = +expAmInp.value;
  let valueExpTxt = expTxtInp.value;
  expenseValue += valueExp;
  expAm.textContent = expenseValue;
  let createdLi = document.createElement("li");
  createdLi.classList.add("listOfBudget");
  createdLi.innerHTML = `<span class="cat">${valueExpTxt}</span>
  <span class="dr">-${valueExp}</span>
  <div class="listBtn">
  <button class="editBtn">🖋️</button>
  <button class="deleteBtn">🗑️</button>`;
  ulList.prepend(createdLi);
  expAmInp.value = "";
  expTxtInp.value = "";
};
earnAddbtn.addEventListener("click", firstBtn);
expAddbtn.addEventListener("click", secBtn);
earnTxtInp.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    firstBtn()
  }
})
expTxtInp.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    secBtn()
  }
})

