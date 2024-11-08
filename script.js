// DOM elements
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');
const buttons = document.querySelectorAll('button');


// Global variables:
let operand1 = null;
let operand2 = null;
let operator = null;
let currentNumber = 0;


// Event Listeners:
keypad.addEventListener('click', handleClick);


// Operational functions
function operate(operator, operand1, operand2) {
    operand1 = +operand1;
    operand2 = +operand2;
    console.log(operand1, operator, operand2);

    switch(operator) {
        case '+':
            return add(operand1, operand2);
            break;
        case '-':
            return subtract(operand1, operand2);
            break; 
        case '*':
            return multiply(operand1, operand2);
            break;
        case '/':
            return division(operand1, operand2);
            break;
        case '%':
            return percentile(operand1);
            break;
        case '√':
            return squareRoot(operand1);
            break;
        case '√':
            return squareRoot(operand1);
            break;
        case '=':
            return evaluate(operator, operand1, operand2);
            break;
        case 'C':
            clear();
            break;
        case '⌫':
            wipeLastDigit();
            break;
    }
}

function handleClick(event) {
    const key = event.target.textContent;
    const keyType = event.target.className.split(' ')[0];

    if (keyType == 'control') {
        handleControl(key);
    } else if (keyType == 'operand') {
        handleOperand(key);
    } else if (keyType == 'dot') {
        handleDot();
    } else if (keyType == 'operator') {
        handleOperator(key);
    }
}

function handleControl(key) {
    operate(key);
}

function handleOperand(operand) {
    if (currentNumber == '0') {
        currentNumber = operand;
    } else {
        currentNumber += operand;
    }
    showNumber(currentNumber);
}

function handleOperator(key) {
    if (operand1 == null && operand2 == null) {
        operand1 = currentNumber;
        currentNumber = 0;
        operator = key;
    } else if (operand1 != null && operand2 == null) {
        operand2 =   currentNumber;
        currentNumber = operate(operator, operand1, operand2);
        showNumber(currentNumber);
        operand1 = currentNumber;
        currentNumber = 0;
        operand2 = null;
        operator = key;
    }
}

function handleDot() {
    if (display.textContent.indexOf('.') == -1) {
        display.textContent += '.';
        currentNumber = display.textContent;
    }
}

function handleEqual(key) {
    operate(operator, operand1, operand2);
    operator = key;
}

function showNumber(num) {
    display.textContent = num;
}

function clear() {
    operand1 = null;
    operand2 = null;
    operator = null;
    currentNumber = 0;
    display.textContent = currentNumber;
}

function wipeLastDigit() {
    const content = display.textContent;
    display.textContent = content.slice(0, content.length - 1);
    if (display.textContent == '') display.textContent = 0;
}

// Arithmetic Functions:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function percentile(n) {
    return n / 100;
}

function squareRoot(n) {
    return n ** 0.5;
}

function evaluate(operator, operand1, operand2) {
    return operate(operator, operand1, operand2);
}