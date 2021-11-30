function add(num1, num2) {
  return (num1 + num2);
};//End of addition function

function subtract(num1, num2) {
  return (num1 - num2);
};//End of subtraction function

function multiply(num1, num2) {
  return (num1 * num2);
};//End of multiply

function divide(num1, num2) {
  return (num1 / num2);
};//End of divide

function operate(operator, num1, num2) {
  if(operator == '+') {
    return add(num1, num2);
  } else if(operator == '-') {
    return subtract(num1, num2);
  } else if(operator == '*') {
    return multiply(num1, num2);
  } else if(operator == '/') {
    return divide(num1, num2);
  }//End of if(operator)
}; //End of operate
