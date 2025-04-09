function calculate() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    let result;
  
    switch (op) {
      case 'add':
        result = a + b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'multiply':
        result = a * b;
        break;
      case 'divide':
        if (b === 0) {
          result = 'Cannot divide by zero';
        } else {
          result = a / b;
        }
        break;
    }
  
    document.getElementById('result').textContent = result;
  }