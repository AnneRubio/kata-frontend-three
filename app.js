const form = document.querySelector('form');
const input = form.querySelectorAll('input');
// console.log(form, input);

// making a function to check for Blank fields so it displays to the user
// an error message + add to the input a border colored when input is filled
// and a red color border when input is left blank.
function checkForEmptyInput(event) {
  const inputThatGetClicked = event.currentTarget;
  // console.log(event.currentTarget);
  // console.log(inputThatGetClicked.value);
  if (inputThatGetClicked.value == "") {
    inputThatGetClicked.classList.add('inputerrors');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Cannot be blank";
    inputThatGetClicked.insertAdjacentElement('afterend', errorMessage);
    errorMessage.classList.add('inputerrors');
  } else {
    inputThatGetClicked.classList.add('inputactive');
    // inputThatGetClicked.style.borderColor = "violet";
  }
}

// adding an event listener on input fields and run the function above
input.forEach(input => {
  input.addEventListener('blur', checkForEmptyInput)
});

// Receive error messages if the card number, expiry date, or CVC fields are in
// the wrong format = !numbers



// Form events short list:
// Keydown = to prevent specific characters
// focus = when entering an input
// blur = when leaving an input
// preventDefault(); = to avoir a form to be submitted
