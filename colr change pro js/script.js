let heading = document.getElementById("heading");
let body = document.body;
let colorValue = document.getElementById("color-value");
let btn = document.getElementById("btn");

heading.style.color = "#efefef";
heading.style.backgroundColor = "black";
heading.style.border = "5px solid black";
heading.style.borderRadius = "50px";
heading.style.fontFamily = "arial,poppins";
heading.style.display = "flex";
heading.style.alignItems = "center";
heading.style.justifyContent = "center";
heading.style.width = "50%";
btn.style.width = "400px";
btn.style.height = "2rem";
btn.style.borderRadius = "50px";

function setValue() {
  let red=Math.round(Math.random()*256)
  let green=Math.round(Math.random()*256)
  let blue=Math.round(Math.random()*256)
  let colorRGB=`rgb(${red},${green},${blue})`
  document.body.style.backgroundColor = colorRGB;
  heading.style.color=colorRGB;
  colorValue.textContent=colorRGB;
  heading.style.color=colorRGB;
}
function setValue2() {
  let red=Math.round(Math.random()*256)
  let green=Math.round(Math.random()*256)
  let blue=Math.round(Math.random()*256)
  let colorRGB=`rgb(${red},${green},${blue})`
  btn.style.background=colorRGB  
  heading.style.backgroundColor =colorRGB
}

btn.addEventListener("click", setValue);
btn.addEventListener("click", setValue2);
