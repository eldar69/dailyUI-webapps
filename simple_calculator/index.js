//to show something on the caculator screen
function addToDisplay(value) {
  const display = document.querySelector('.display');
  display.value += value;
}

//to clear the display
function clearDisplay() {
  const display = document.querySelector('.display');
  display.value = '';
}

//calculate
function calculate() {
  const display = document.querySelector('display');
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error'
  }
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      clearDisplay();
    } else if (button.textcontent === '='){
      calculate();
    } else {
      addToDisplay(button.textContent);
    }
  });
});



   