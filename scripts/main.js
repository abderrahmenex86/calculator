const history = document.querySelector('#history')
const current = document.querySelector('#current')
const buttons = document.querySelectorAll('button')

let currentValue = 0
let previousValue = 0
let opr = ""
let signF = false

function add() {
    return arguments[0] + arguments[1]
}

function subtract() {
    return arguments[1] - arguments[0]
}

function multiply() {
    return arguments[0] * arguments[1]
}

function divide() {
    return arguments[1] / arguments[0]
}

function operate(opr, num1, num2) {
    if (opr === "+") {
        return add(num1, num2)
    } else if (opr === "-") {
        return subtract(num1, num2)
    } else if (opr === "*") {
        return multiply(num1, num2)
    } else if (opr === "/") {
        return divide(num1, num2)
    }
}

function start() {
    current.textContent = 0
    history.textContent = current.textContent
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (current.textContent.length < 15) {
            if (e.target.value < 10 && e.target.value >= 0) {
                if (current.textContent === "0") {
                    current.textContent = ""
                }
                current.textContent += e.target.value
                currentValue = parseFloat(current.textContent)
            } else if (e.target.value == "+") {
                previousValue = currentValue
                history.textContent = previousValue
                currentValue = 0
                current.textContent = currentValue
                opr = "+"
            } else if (e.target.value == "-") {
                previousValue = currentValue
                history.textContent = previousValue
                currentValue = 0
                current.textContent = currentValue
                opr = "-"
            } else if (e.target.value == "*") {
                previousValue = currentValue
                history.textContent = previousValue
                currentValue = 0
                current.textContent = currentValue
                opr = "*"
            } else if (e.target.value == "/") {
                previousValue = currentValue
                history.textContent = previousValue
                currentValue = 0
                current.textContent = currentValue
                opr = "/"
            } else if (e.target.value == "=") {
                if (opr !== "") {
                    history.textContent = currentValue
                    currentValue = operate(opr, currentValue, previousValue)
                    current.textContent = currentValue
                    opr = ""
                }
            } else if (e.target.value == "clear") {
                previousValue = 0
                history.textContent = previousValue
                currentValue = 0
                current.textContent = currentValue
                signF = false
                opr = ""
            } else if (e.target.value == "sign") {
                current.textContent = "-" + currentValue
                currentValue = parseFloat(current.textContent)
            } else if (e.target.value == ".") {
                if (!signF) {
                    current.textContent = currentValue + "."
                    currentValue = parseFloat(current.textContent)
                    console.log(currentValue)
                    signF = true
                }
            } else if (e.target.value === "backspace") {
                if (current.textContent.length > 1) {
                    current.textContent = current.textContent.slice(0, current.textContent.length - 1)
                }
                else if (current.textContent.length === 1) {
                    current.textContent = 0
                }
            }
        }
    })
})

start()