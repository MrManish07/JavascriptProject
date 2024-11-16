const hidden = document.querySelector(".hide");
const showen = document.querySelector(".show");
const greaterSmaller = document.querySelector(".greaterSmaller");
const inputData = document.querySelector("input[type='text']");
const Checkbtn = document.querySelector("input[type='submit']");
const findAgainBtn = document.querySelector(".findAgain");
const randomNum = Math.floor(Math.random() * 100 + 1);
const accuracy = document.querySelector(".accuracy");
const lastLine = document.querySelector(".lastHeading");
const scoreBoard = document.querySelector(".score");
let countInput = 0;
let func = () => {
  let value = inputData.value;
  if (value >= 1 && value <= 100) {
    if (value > randomNum) {
      lastLine.style.display = "block";
      greaterSmaller.textContent = "greater";
      inputData.value = "";
      countInput += 1;
    } else if (value < randomNum) {
      lastLine.style.display = "block";
      greaterSmaller.textContent = "smaller";
      inputData.value = "";
      countInput ++;
    } else {
      hidden.style.display = "block";
      showen.style.display = "none";
      accuracy.textContent = 100 - countInput;
      inputData.value = "";
    }
  } else {
    if (inputData.value == "") {
      lastLine.textContent = "Don't keep input blank";
      lastLine.style.display = "block";
      setTimeout(() => location.reload(), 1500);
    } else {
      scoreBoard.style.fontSize = "1.5rem";
      scoreBoard.textContent = "Please Enter a Number between 1 to 100";
      hidden.style.display = "block";
      showen.style.display = "none";
    }
  }
};
let func2 = () => {
  let value = inputData.value;
  if (event.key === "Enter") {
    if (value >= 1 && value <= 100) {
      if (value > randomNum) {
        lastLine.style.display = "block";
        greaterSmaller.textContent = "greater";
        inputData.value = "";
        countInput += 1;
      } else if (value < randomNum) {
        lastLine.style.display = "block";
        greaterSmaller.textContent = "smaller";
        inputData.value = "";
        countInput += 1;
      } else {
        hidden.style.display = "block";
        showen.style.display = "none";
        accuracy.textContent = 100 - countInput;
        inputData.value = "";
      }
    } else {
      if (inputData.value == "") {
        lastLine.textContent = "Don't keep input blank";
        lastLine.style.display = "block";
        setTimeout(() => history.go(), 1500);
        
      } else {
        scoreBoard.style.fontSize = "1.5rem";
        scoreBoard.textContent = "Please Enter a Number between 1 to 100";
        hidden.style.display = "block";
        showen.style.display = "none";
      }
    }
  }
};
Checkbtn.addEventListener("click", func);
inputData.addEventListener("keypress", func2);
