//Functions for different operations of the calculator

function add(num1, num2) {
  return (num1 + num2);
};//End of addition function

function subtract(num1, num2) {
  return (num1 - num2);
};//End of subtraction function

function multiply(num1, num2) {
  return (num1 * num2);
};//End of multiplication function

function divide(num1, num2) {
  return (num1 / num2);
};//End of division function

function operate(operator, num1, num2) {
  if(operator == 'add') {
    return add(num1, num2);
  } else if(operator == 'subtract') {
    return subtract(num1, num2);
  } else if(operator == 'multiply') {
    return multiply(num1, num2);
  } else if(operator == 'divide') {
    return divide(num1, num2);
  }//End of if(operator)
}; //End of operation function


//Adds event listeners to the different elements by category
const numberButtons = document.querySelectorAll('.nmbrBtns');
const operatorButtons = document.querySelectorAll('.oprtrBtns');
const clearButtons = document.querySelectorAll('.topBtns');
const calculatorDisplay = document.querySelector('#screenTxt');
let nextNumber = '';
let operatorFunction = '';
let clearFunction = '';

let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
let solution = '';

let firstOperatorFunction = '';
let secondOperatorFunction = '';

//Fills the screen and stores the value of the current number
for (let btn of numberButtons) {
  btn.addEventListener('click', function() {
    nextNumber = btn.id;
    if(currentNumber.length < 14) {
      if(btn.id === 'decimal' && !currentNumber.includes('.')) {
      currentNumber = currentNumber + '.';
    } else if(btn.id !== 'decimal') {
      currentNumber = currentNumber + nextNumber;
    };
    };
    calculatorDisplay.innerHTML = currentNumber;
  });
};//End of numberButtons

for (let btn of operatorButtons) {
  btn.addEventListener('click', function() {
    firstOperatorFunction = secondOperatorFunction;
    secondOperatorFunction = btn.id;
    if (firstNumber === '') {
      firstNumber = currentNumber;
      currentNumber = ''
    } else if (secondNumber === '') {
      secondNumber = currentNumber;
      currentNumber = '';
      solution = operate(firstOperatorFunction, parseInt(firstNumber), parseInt(secondNumber));
      firstNumber = solution;
      secondNumber = ''
      currentNumber = ''
      solution = ''
      calculatorDisplay.innerHTML = firstNumber;
    }
    console.log(firstNumber, secondNumber, solution);
  });
};//End of operatorButtons

for (let btn of clearButtons) {
  btn.addEventListener('click', function() {
    clearFunction = btn.id;
    console.log(clearFunction);
  });
};//End of clearButtons
