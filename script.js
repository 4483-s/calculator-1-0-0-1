const display = document.querySelector(".display >p");
const btns = document.querySelectorAll("button");
//DOM
display.textContent = "0";
let operand1 = "";
let operator = "";
let operand2 = "";

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent.match(/\d/)) {
      digit(btn.textContent);
    } else {
      fn(btn.textContent);
    }
  });
});
function digit(content) {
  if (!operator) {
    operand1 += content;
  } else {
    operand2 += content;
  }
  display.textContent = operand1;
}
function fn(content) {
  if (content === "=") {
  }
}
