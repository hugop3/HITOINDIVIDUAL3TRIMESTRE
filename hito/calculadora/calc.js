
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

   
    if (!action) {
      
      if (displayedNum === '0' || calculator.dataset.previousKeyType === 'operator' || calculator.dataset.previousKeyType === 'calculate') {
        display.textContent = keyContent;
       
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number';
    }

  
    if (action === 'sumar' || action === 'restar' || action === 'multiplicar' || action === 'dividir' || action === 'percent') {
    
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = 'operator';
    }

 
if (action === 'raiz') {
  const num = parseFloat(displayedNum);
 
  if (!isNaN(num)) {
    const calcValue = Math.sqrt(num);
    display.textContent = calcValue;
    calculator.dataset.previousKeyType = 'unary';
  }
}


if (action === 'multiplo') {
  const num = parseFloat(displayedNum);

  if (!isNaN(num)) {
    const calcValue = Math.pow(num, 2);
    display.textContent = calcValue;
    calculator.dataset.previousKeyType = 'unary';
  }
}

   
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
   
      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = 'calculate';
    }

 
    if (action === 'clear') {
   
      delete calculator.dataset.firstValue;
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
      display.textContent = 0;
    }
  }
});


function calculate(n1, operator, n2) {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);
  if (operator === 'sumar') return num1 + num2;
  if (operator === 'restar') return num1 - num2;
  if (operator === 'multiplicar') return num1 * num2;
  if (operator === 'dividir') return num1 / num2;
  if (operator === 'percent') return num1 * (num2 / 100);
}
