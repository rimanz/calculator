let operand1;
let operand2;
let operator;

function operate() {
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
    }
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