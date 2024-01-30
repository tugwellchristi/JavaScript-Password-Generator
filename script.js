// DOM elements
const result = document.querySelector("#password");
const upperCaseEl = document.querySelector("#uppercase");
const lowerCaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const lengthEl = document.querySelector("#length");
const generateBtn = document.getElementById("generate");

// Global string variables
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "~!@#$%^&*";

// Function used to generate the password
function writePassword() {
  let password = "";
  let length = parseInt(lengthEl.value);
  let chars = "";

  // Check which character sets to include based on user selection
  if (upperCaseEl.checked) chars += upperCaseChars;
  if (lowerCaseEl.checked) chars += lowerCaseChars;
  if (numberEl.checked) chars += numberChars;
  if (symbolEl.checked) chars += symbolChars;

  // Alert if no checkboxes are checked or length is invalid
  if (!chars || length < 8 || length > 25) {
    alert("Please select at least one criteria and ensure the length is between 8 and 25 characters.");
    return;
  }

  // For loop increments based on desired length
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }

  // Display the generated password
  result.value = password;
}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
