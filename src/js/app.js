const display = document.getElementById('display');
let currentInput = '0';
let firstOperand = null;
let operator = null;

document.querySelector('.buttons').addEventListener('click', function(event) {
    if (!event.target.matches('button')) return;

    const key = event.target;
    const keyValue = key.textContent;

    // Prevent interaction with disabled buttons
    if (key.classList.contains('disabled')) return;

    if (key.classList.contains('number')) {
        if (currentInput === '0') {
            currentInput = keyValue;
        } else {
            currentInput += keyValue;
        }
    }

    if (key.classList.contains('operator')) {
        firstOperand = parseFloat(currentInput);
        operator = keyValue;
        currentInput = '0';
    }

    if (key.id === 'equals') {
        const secondOperand = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
            case '+': result = firstOperand + secondOperand; break;
            case '-': result = firstOperand - secondOperand; break;
            case '*': result = firstOperand * secondOperand; break; // Наша новая фича
        }
        currentInput = result.toString();
        operator = null;
    }

    if (key.id === 'clear') {
        currentInput = '0';
        firstOperand = null;
        operator = null;
    }
    
    display.textContent = currentInput;
});