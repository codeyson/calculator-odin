const display = document.querySelector(".display");
const operand = document.querySelector(".operand")


let firstNum;
let secondNum;
let step = 0;
let numArray = [];
let secondNumArray = [];
let result = 0


function getNum(num) {
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNum = Number(numArray.join(''))
        display.value = firstNum
        
    } 
    else if (step === 2) {
        secondNumArray.push(num)
        secondNum = Number(secondNumArray.join(''))
        display.value = secondNum
    
    }
}

function getOperator(op) {
    step = 2;
    operation = op;
}

function backspace () {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function clearDisplay () {
    display.value = 0;
    firstNum = null;
    secondNum = null;
    step = 0;
    operation = null;
    result = 0;
    numArray = [];
    secondNumArray = [];
}

function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function percent (num1, num2){
    return num1 % num2;
}


function calculate () {
    if (operation === '+') {
        result = add(firstNum, secondNum);
        display.value = result
    }
    else if (operation === '-') {
        result = subtract(firstNum, secondNum);
        display.value = result
    }
    else if (operation === '*') {
        result = multiply(firstNum, secondNum);
        display.value = result
    }
    else if (operation === '/') {
        result = divide(firstNum, secondNum);
        display.value = result
    }
    else if (operation === '%') {
        result = percent(firstNum, secondNum);
        display.value = result
    }
}

