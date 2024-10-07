let display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function square() {
    let number = parseFloat(display.value);
    if (!isNaN(number)) {
        display.value = Math.pow(number, 2);
    }
}

function calculate() {
    let expression = display.value;
    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function randomNumber() {
    let rand = (Math.random()).toFixed(5);
    display.value = rand;
}