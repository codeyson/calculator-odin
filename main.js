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

function operate(a, b, operator) {
    a = +a;
    b = +b;
    if (operator === "+") return add(a, b);
    else if (operator === "-") return subtract(a, b);
    else if (operator === "x") return multiply(a, b);
    else if (operator === "/") return divide(a, b);
    else return null;
  }


  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons");
  
  buttons.forEach(button => {
    button.addEventListener("click", event => {
      display.value += event.target.value;
    });
  });
