const resultParagraph = document.querySelector('.result');
const keypadElements = document.querySelector('.keypad');

const displayResult = (result) => {
  result ? resultParagraph.innerHTML = result : resultParagraph.innerHTML = 0;
};

let bank = '';

const subtract = (arg1, arg2) => {
  if (arg1 && arg2) {
    bank = arg1 - arg2;
    displayResult(bank);
  }
};

const add = (arg1, arg2) => {
  if (arg1 && arg2) {
    bank = arg1 + arg2;
    displayResult(bank);
  }
};

const multiply = (arg1, arg2) => {
  if (arg1 && arg2) {
    bank = arg1 * arg2;
    currentValue = bank;
    displayResult(currentValue);
  }
};

const divide = (arg1, arg2) => {
  if (arg1 && arg2) {
    bank = arg1 / arg2;
    displayResult(currentValue);
  }
};

const mod = (arg1, arg2 = null) => {
  if (arg1) {
    bank = arg1 / 100;
    displayResult(bank);
  } 

  if (arg2) {
    bank = 'Malformed expression'
    displayResult(bank);
  } 
};

const handleCalculation = (firstValue, operator, secondValue) => {
  console.log(firstValue, operator, secondValue);
  switch(operator) {
    case '-':
      subtract(firstValue, secondValue);
      break;
    case '+':
      add(firstValue, secondValue);
      break;
    case '*':
      multiply(firstValue, secondValue);
      break;
    case '/':
      divide(firstValue, secondValue);
      break;
    case '%':
      mod(firstValue, secondValue);
      break;
    default:
      'end of operator';
  }
};

let firstValue = 0;
let secondValue = 0;
let operator;

const handleSelection = () => {
  keypadElements.addEventListener('click', (event) => {
    const childElement = event.target;

    const numbers = '0123456789';
    const operators = '%/*-+';

    if (childElement.name) {
      if (numbers.includes(childElement.name)) {
        bank += `${childElement.name}`;
      } else if (operators.includes(childElement.name)) {
        operator = childElement.name;
        firstValue = parseInt(bank, 10);
        bank = '';
      } else if (childElement.name === '=') {
        secondValue = parseInt(bank, 10);
        handleCalculation(firstValue, operator, secondValue);
      }

      if (childElement.name === 'AC') {
        bank = '';
      }
    }
    displayResult(bank);
  });
};

handleSelection();