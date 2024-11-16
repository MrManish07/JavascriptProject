
//***************TARGET HTML ELEMENTS**********************

const fullbody = document.querySelector(".fullbody");
const form = document.querySelector(".form");
let inpVal = document.querySelector("input[type='text']");
const submitInp = document.querySelector("input[type='submit']");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

//******************MY DATABSE****************************

const myDataBase = ["manish", "ranjeet", "suraj", "jitendar", "abhishek","raju","shiv","arjun"];

//******************JAVASCRIPT LOGIC************************

fullbody.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = inpVal.value;
  if (myDataBase.includes(value)) {
    form.style.display = "none";
    heading.textContent = "User Succfully Found ✅";
    heading.style.display = "block";
    btn.style.display="block"
  } else {
    form.style.display = "none";
    heading.textContent = "Try Again User Not Found ❌";
    heading.style.display = "block";
    btn.style.display = "block";
  }
  inpVal.value = "";
});
