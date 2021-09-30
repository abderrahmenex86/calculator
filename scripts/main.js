function add() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

function subtract() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        total -= arguments[i]
    }
    return total
}

function multiply() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i]
    }
    return total
}

function divide() {
    let total = arguments[0];
    if (arguments[1] === 0) {
        return Infinity
    }
    for (let i = 1; i < arguments.length; i++) {
        total /= arguments[i]
    }
    return total
}

function operate(opr, num1, num2) {
    if (opr === "+") {
        return add(num1, num2)
    }
    if (opr === "-") {
        return subtract(num1, num2)
    }
    if (opr === "*") {
        return multiply(num1, num2)
    }
    if (opr === "/") {
        return divide(num1, num2)
    }
}

let displayValue = 0;

const result = document.querySelector('#result')
const previous = document.querySelector('#previous')
previous.textContent = "0"
previousValue = 0
let buttonClicked = ""

function myInput(c){
    if (parseFloat(c) >= 0 || parseFloat(c) <= 9) {
        displayValue += c
    }
    else if (c !== "=") {
        buttonClicked = c
        previousValue = displayValue
        displayValue = "0"
        previous.textContent = previousValue
    }
    else {
        displayValue = operate(buttonClicked, parseInt(previousValue), parseInt((displayValue)))
        console.log('hi')
    }
    result.textContent = displayValue
}
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
            if (result.textContent === "0") {
                result.textContent = ""
                displayValue = ""
            }
            myInput(e.target.value)
        }
    )
})
