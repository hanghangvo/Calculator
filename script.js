let num1 = "";
let num2 = "";
let operator = null;

const display = document.querySelector(".show");
const ex = document.querySelector(".del");

const setOperands = (num) => {
  let isPoint = num === ".";

  if (!operator) {
    if (num1.includes(".") && isPoint) {
      return;
    }
    num1 += num;
    display.innerHTML = num1;
  } else {
    num2 += num;
    display.innerHTML = num2;
  }
};

const setOperator = (newOperator) => {
  if (operator) {
    calculate();
  } else {
    operator = newOperator;
  }
};

const calculate = () => {
  let result;

  if (!num1 || !num2 || !operator) {
    return;
  }

  if (operator === "add") {
    result = parseFloat(num1) + parseFloat(num2);
  }
  if (operator === "minus") {
    result = parseFloat(num1) - parseFloat(num2);
  }
  if (operator === "divide") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  if (operator === "multiply") {
    result = parseFloat(num1) * parseFloat(num2);
  }

  display.innerHTML = result;
  num1 = "";
  num2 = "";
  operator = null;
};

const clr = () => {
  display.innerHTML = "";
  num1 = "";
  num2 = "";
  operator = null;
};

function deleteNum(numb) {
  let x = !!operator ? num2 : num1;

  x = x.slice(0, -1);

  if (!!operator) {
    num2 = x;
  } else num1 = x;

  return x;
}

ex.addEventListener("click", () => {
  display.innerHTML = deleteNum();
});


