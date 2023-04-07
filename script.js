const myButtons = document.querySelectorAll(".buttons-number");
const myOperator = document.querySelectorAll('.buttons-operator');
const clearButton = document.querySelector('.clear');
const numberDisplay = document.querySelector('.num-display');
let buttonEquals = document.querySelector('.equal-to');


// initialize the components of the operation
let firstNumber = [];
let secondNumber = [];
let currentArray = firstNumber;
let numberOneDisplay = null;
let numberTwoDisplay = null;
let savedNumberOneDisplay = null;
let savedNumberTwoDisplay = null;
let operator = null;


// this function does the calculation of the operation
function calculate(){

let result = 0;
if (operator === '+'){

    result = savedNumberOneDisplay + savedNumberTwoDisplay;

} 
else if (operator === '-' ){
result = savedNumberOneDisplay-savedNumberTwoDisplay;

}
else if (operator === 'X'){

    result = savedNumberOneDisplay * savedNumberTwoDisplay;
}
else if ( operator === '÷' ){

    result = savedNumberOneDisplay / savedNumberTwoDisplay;
    result = result.toFixed(3);
}
numberDisplay.textContent = result;
savedNumberOneDisplay = result;
savedNumberTwoDisplay = null;
currentArray = firstNumber;
firstNumber = [];
numberOneDisplay = null;
numberTwoDisplay = null;
}

myButtons.forEach(button => {
  button.addEventListener('click', event => {
    if (currentArray.length == 9) {
      return;
    } else {
      const number = parseInt(button.textContent);
      currentArray.push(number);
      const currentNumber = parseInt(currentArray.join('')) 
      numberDisplay.textContent = currentNumber;
      if (currentArray === firstNumber) {
        numberOneDisplay = currentNumber;
      }
      else if (currentArray === secondNumber) {
        savedNumberTwoDisplay = parseInt(currentArray.join(''));
      } 
      else {
        numberTwoDisplay = currentNumber;
      }
    }
  });
});

myOperator.forEach(button => {
  button.addEventListener('click', event => {
   
    operator = button.textContent;
    savedNumberOneDisplay = numberOneDisplay;
    savedNumberTwoDisplay = numberTwoDisplay;
    currentArray = secondNumber;
    firstNumber = [];
    numberOneDisplay = null;
    numberTwoDisplay = null;
    numberDisplay.textContent = '';
  });
});
buttonEquals.addEventListener('click', event => {

    calculate();

})
clearButton.addEventListener('click', event => {
  firstNumber = [];
  secondNumber = [];
  currentArray = firstNumber;
  numberOneDisplay = null;
  numberTwoDisplay = null;
  savedNumberOneDisplay = null;
  savedNumberTwoDisplay = null;
  operator = null;
  numberDisplay.textContent = '0';
});





