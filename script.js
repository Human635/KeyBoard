let keys = document.querySelectorAll('.key');

function keyPress(event) {
  let key = event.target;

  switch (key.id) {
    case 'backspace':
      let textInput = document.querySelector('#text-input');
      textInput.value =  textInput.value.slice(0, -1);
    break;
    case 'caps lock':
      let keyCL = document.querySelector('#text-input');
      let uppercase = key.classList.toggle('active');
      let text = keyCL.value;
      keyCL.value = uppercase ? text.toUpperCase() : text.toLowerCase();
    break;
    default:
      let textInputt = document.querySelector('#text-input');

      textInputt.value += key.textContent;
    break;
  }
}

keys.forEach(key => {
  key.addEventListener('click', keyPress);
});