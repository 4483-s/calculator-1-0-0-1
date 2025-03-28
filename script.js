const display = document.querySelector(".display >p");
const btns = document.querySelectorAll("button");
//DOM
display.textContent = "0";
let operand1 = "";
let operand2 = "";
let operator = null;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    act(btn.textContent);
  });
});

function act(content) {
  if (content === "AC") {
    operand1 = "";
    operand2 = "";
    operator = null;
    display.textContent = "0";
    return;
  }
  operator =
    content === "/"
      ? "/"
      : content === "*"
      ? "*"
      : content === "-"
      ? "-"
      : content === "+"
      ? "+"
      : null;
  if (content.match(/\d/)) {
    if (!operator) {
      operand1 += content;
    } else {
      operand2 += content;
    }
  }
  if (operator === "*") {
    operand1 = +operand1 * +operand2;
    operator = null;
  }
  if (operator === "+") {
    operand1 = +operand1 + +operand2;
    operator = null;
  }
  if (operator === "-") {
    operand1 = +operand1 - +operand2;
    operator = null;
  }
  if (operator === "/") {
    operand1 = +operand1 / +operand2;
    operator = null;
  }
  display.textContent = operator ? operand1 + operator : operand1;
}
