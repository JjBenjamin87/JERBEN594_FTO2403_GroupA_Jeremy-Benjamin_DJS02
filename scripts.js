// Declares global variables
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// sets up the event listener for the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  // Declares dividend and divider
  const { dividend, divider } = Object.fromEntries(entries);

  // Checks if input fields are empty
  if (dividend.length === 0 || divider.length === 0) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Checks if the divider is above 0
  if (+divider <= 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    return;
  }

  // Rounds down to the first whole number
  const sum = Math.floor(dividend / divider);

  // Checks if it is a number
  if (isNaN(sum)) {
    result.innerText =
      "Division not performed. Invalid data entry. Please enter valid numbers.";
    console.error("Critical Error: Invalid data entry");
  } else {
    result.innerText = sum;
  }
});
