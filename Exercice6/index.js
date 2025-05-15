function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  const result = eval(display.value);
  // If division by 0, display "Division by zero is not allowed"
  if (result === Infinity || result === -Infinity) {
    display.value = "Division by zero is not allowed";
  } else {
    display.value = result;
  }
}
