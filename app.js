const form = document.querySelector('form');
const input = form.querySelectorAll('input');
// const button = document.getElementById('button');
// console.log(form, input);

function checkForEmptyInput(event) {
  const inputThatGetClicked = event.currentTarget;
  // console.log(event.currentTarget);
  // console.log(inputThatGetClicked.value);
  if (inputThatGetClicked.value == "") {
    inputThatGetClicked.style.borderColor = "red"; // set the right red
    // need to add alert text can't be blank below each input left blank
  } else {
    inputThatGetClicked.style.borderColor = "violet"; // set the right purple
  }
}

// adding an event listener on input fields and run a function to look for empty
// fields so when leaving the input error message and adding proper color style
input.forEach(input => {
  input.addEventListener('blur', checkForEmptyInput)
});

// Keydown = to prevent specific characters
// focus = when entering an input
// blur = when leaving an input
// preventDefault(); = to avoir a form to be submitted
