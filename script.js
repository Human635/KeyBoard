const shiftButton = document.getElementById('Shift');
const textInput = document.getElementById('text-input');

let keys = document.querySelectorAll('.key');

function keyPress(event) {
  let key = event.target;

  switch (key.id) {
    case 'backspace':
      let textInput = document.querySelector('#text-input');
      textInput.value =  textInput.value.slice(0, -1);
    break;
    case 'space':
      let textInputS = document.querySelector('#text-input');
      textInputS.value += ' ';
    break;
    default:
      let textInputt = document.querySelector('#text-input');

      textInputt.value += key.textContent;
    break;
  }
}

keys.forEach(key => {
  console.log('textInput')
  key.addEventListener('click', keyPress);
});

function toggleCapsLock() {
  const textInput = document.getElementById('text-input');

  if (textInput.style.textTransform === "uppercase") {
    textInput.style.textTransform = "none";
  } else {
    textInput.style.textTransform = "uppercase";
  }
}

let clickCount = 0;

shiftButton.addEventListener('click', function() {
    clickCount++;
    const currentValue = textInput.value;
    const lastChar = currentValue.slice(-1);
    let newValue;
    
    if (clickCount === 2) {
        newValue = currentValue.slice(0, -1) + lastChar.toLowerCase();
    } else {
        newValue = currentValue.slice(0, -1) + lastChar.toUpperCase();
    }
    
    textInput.value = newValue;
    
    clickCount = clickCount >= 2 ? 0 : clickCount;
});