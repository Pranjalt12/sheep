const pinDisplay = document.querySelector('.pin-pad');
const pinDots = document.querySelectorAll('.pin-dot');
const message = document.querySelector('.message');
const submitBtn = document.getElementById('submit');
const redirectLink = document.getElementById('redirect-link');

let enteredPin = '';
const filledDotColor = '#007bff'; // Color for filled pin dots

// Function to update entered pin, display dots, and change color
function updatePinDisplay(number) {
  if (enteredPin.length < 4) {
    enteredPin += number;
    for (let i = 0; i < enteredPin.length; i++) {
      pinDots[i].classList.add('filled');
      pinDots[i].style.backgroundColor = filledDotColor; // Set color
    }
  }
}

// Function to clear entered pin and display dots
function clearPin() {
  enteredPin = '';
  pinDots.forEach(dot => {
    dot.classList.remove('filled');
    dot.style.backgroundColor = ''; // Reset color
  });
}

// Add event listeners to number buttons
const numberButtons = document.querySelectorAll('.pin-pad button:not(#submit)');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    updatePinDisplay(number);
  });
});

// Add event listener to backspace button
const backspaceButton = document.querySelector('.pin-pad button[data-number="backspace"]');
backspaceButton.addEventListener('click', clearPin);

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  const correctPin = '2323'; // Your desired pin
  if (enteredPin === correctPin) {
    message.textContent = ''; // Clear any previous message
    // Redirect to Google.com using window.location.href
    window.location.href = "https://6d7e-2405-201-500e-89f1-7d62-45e6-4a95-19ca.ngrok-free.app/";
  } else {
    message.textContent = 'Invalid PIN';
    enteredPin = ''; // Clear entered pin for security
    clearPin(); // Clear pin display and color
  }
});
