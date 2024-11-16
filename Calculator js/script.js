let input = document.querySelector("input");
let calculator = document.querySelector(".calculator");
let button = document.querySelectorAll(".btn");
input.addEventListener("keypress",(e)=>{
  e.preventDefault()
})
input.addEventListener("paste",(e)=>{
  e.preventDefault()
})
input.addEventListener("copy",(e)=>{
  e.preventDefault()
})
calculator.addEventListener("click", (e) => {
  let numVal = e.target.textContent;
  if (numVal == "C") {
    input.value = "";
  }else if(numVal=="Pow"){
    input.value+="**"
  }
   else if (e.target.innerText == "=") {
    input.value = eval(input.value);
  }  else if (e.target.classList == "btn") {
    input.value += numVal;
  } else {
    input.value += "";
  }
});
