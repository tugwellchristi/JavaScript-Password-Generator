
// DOM elements
const result = document.getElementById("password");
const upperCaseEl = document.querySelector("uppercase");
const lowerCaseEl = document.querySelector("lowercase");
const numberEl = document.querySelector("number");
const symbolEl = document.querySelector("symbol");
const lengthEl = document.querySelector("length");
const generateBtn = document.getElementById("generate");
const checkbox = document.getElementById("checkbox");

// Global string variables
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "~!@#$%^&*";
const length = 8;

// Variable containing all string variables
const allChars = upperCase + lowerCase + number + symbol;

// Functions used
function writePassword() {
  let password = " ";

  // Generates random selections based on the above strings
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  result.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



// // Get the checkbox element
// const checkbox = document.getElementById("myCheckbox");

// // Get the string content
// const stringContent = "This is the content to be added.";

// // Attach a click event listener to the checkbox
// checkbox.addEventListener("click", function() {
//   // Get the element where you want to insert the content
//   const targetElement = document.getElementById("targetElement");

//   // Check if the checkbox is checked
//   if (checkbox.checked) {
//     // Insert the content into the desired location in the DOM
//     targetElement.textContent = stringContent;
//   } else {
//     // Clear the content if the checkbox is unchecked
//     targetElement.textContent = "";
//   }
// });

