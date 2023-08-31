const myButtons = document.querySelectorAll(".buttons-number");
const myOperator = document.querySelectorAll(".buttons-operator");
const clearButton = document.querySelector(".clear");
const numberDisplay = document.querySelector(".num-display");
let buttonEquals = document.querySelector(".equal-to");

let firstNumber = [];
let secondNumber = [];
let result;
let currentResult = "";
let numberOne;
let numberTwo;
let additionalNumber = "";
let numberOneDisplay;
let numberTwoDisplay;
let operand = "";

myButtons.forEach((button) => {
  button.addEventListener("click", () => {
    myOperator.forEach((opButton) => {
      opButton.style.backgroundColor = ""; // Set to default background color
      opButton.style.color = ""; // Set to default text color
    });

    if (operand === "") {
      firstNumber.push(button.textContent);
      currentArray = firstNumber;
      numberOneDisplay = currentArray.join("");
      numberDisplay.textContent = numberOneDisplay;
      numberOne = parseInt(numberOneDisplay, 10);
      return;
    }
    if (operand !== "") {
      firstNumber = [];
      secondNumber.push(button.textContent);
      let secondCurrentArray = secondNumber;
      numberTwoDisplay = secondCurrentArray.join("");
      numberDisplay.textContent = numberTwoDisplay;
      numberTwo = parseInt(numberTwoDisplay, 10);
      return;
    }
  });
});

myOperator.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "#e7713a";
    button.style.color = "white";
    operand = button.textContent;
  });
});
const calculate = () => {
  if (operand === "X" && currentResult === "") {
    return (result = numberOne * numberTwo);
  }
  if (operand === "+" && currentResult === "") {
    return (result = numberOne + numberTwo);
  }
  if (operand === "-" && currentResult === "") {
    return (result = numberOne - numberTwo);
  }
  if (operand === "÷" && currentResult === "") {
    return (result = numberOne / numberTwo);
  }
  if (operand === "X" && currentResult !== "") {
    return (result = additionalNumber * numberTwo);
  }
  if (operand === "+" && currentResult !== "") {
    return (result = additionalNumber + numberTwo);
  }
  if (operand === "-" && currentResult !== "") {
    return (result = additionalNumber - numberTwo);
  }
  if (operand === "÷" && currentResult !== "") {
    return (result = additionalNumber / numberTwo);
  }
};
buttonEquals.addEventListener("click", () => {
  calculate();
  numberDisplay.textContent = result;
  currentResult = result;
  secondNumber = [];
  if (currentResult !== "") {
    additionalNumber = currentResult;
  }
});
clearButton.addEventListener("click", () => {
  firstNumber = [];
  secondNumber = [];
  result;
  currentResult = "";
  numberOne;
  numberTwo;
  additionalNumber = "";
  numberOneDisplay;
  numberTwoDisplay;
  operand = "";
  numberDisplay.textContent = "0";
});
