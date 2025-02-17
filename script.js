const calculator = {
    // Operator and Operands:
    current: '',
    previous: '',
    operator: '',

    // Arithmetic Methods:
    add: (a, b) => (parseFloat(a) + parseFloat(b)).toString(),
    subtract: (a, b) => (parseFloat(a) - parseFloat(b)).toString(),
    multiply: (a, b) => (parseFloat(a) * parseFloat(b)).toString(),
    divide: (a, b) => (parseFloat(a) / parseFloat(b)).toString(),

    // Operational Methods:
    operate() {
        let result;

        switch (this.operator) {
            case '+':
                result = this.add(this.previous, this.current);
                break;
            case '-':
                result = this.subtract(this.previous, this.current);
                break;
            case '*':
                result = this.multiply(this.previous, this.current);
                break;
            case '/':
                result = this.divide(this.previous, this.current);
                break;
        }

        this.previous = result;
        this.current = '';
    },

    updateCurrentOperand(digit) {
        this.current += digit.toString();
    },

    reset() {
        this.current = '';
        this.previous = '';
        this.operator = '';
    }
}

// Elements and Event Delegations:
const display = document.querySelector('.display');
const keypad = document.querySelector('.keypad');

keypad.addEventListener('click', handleInput);

// Event Handlers:
function handleInput(event) {
    const key = event.target.textContent;

    switch (key) {
        case '.':
            if (calculator.current.includes('.')) {
                return  // prevent multiple dots
            } else if (calculator.current === '') {
                calculator.updateCurrentOperand('0');   // prepend leading zero
            }
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            calculator.updateCurrentOperand(key);
            updateDisplay();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (calculator.previous === '') {
                calculator.previous = calculator.current;
                calculator.current = '';
                calculator.operator = key;
            } else {
                // both operands are present and an operation in queue
                calculator.operate();
                calculator.operator = key;
                updateDisplay(calculator.previous);
            }
            break;
        case 'AC':
            calculator.reset();
            updateDisplay('0');
            break;
        case '←':
            deleteLastDigit();
            break;
    }
}

// Helper Functions:
function updateDisplay(value) {
    // update display according to the current value if no value provided
    value = value ?? calculator.current;
    display.textContent = value === '' ? 0 : value;
}

function deleteLastDigit() {
    calculator.current = calculator.current.slice(0, -1);
    updateDisplay();
}