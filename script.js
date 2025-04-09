let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += ` ${op} `;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.trim();
  display.value = display.value.slice(0, display.value.length - 1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch (e) {
    display.value = 'Error';
  }
}