
// DOM elements
const result = document.querySelector("#password");
const upperCaseEl = document.querySelector("#uppercase");
const lowerCaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const lengthEl = document.querySelector("#length");
const generateBtn = document.getElementById("generate");


// Global string variables
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "~!@#$%^&*";


// Function used to generate the password
function writePassword() {
  let password = " ";
  let length = lengthEl.value;
  let chars = " "

  // If an element is checked, it pulls from its named string of characters. If not checked, it does not display any characters
  if (upperCaseEl.checked) {
    chars += upperCase;
  } else {
    chars += " ";
  }

  if (lowerCaseEl.checked) {
    chars += lowerCase;
  } else {
    chars += " ";
  }

  if (numberEl.checked) {
    chars += number;
  } else {
    chars += " ";
  }

  if (symbolEl.checked) {
    chars += symbol;
  } else {
    chars += " ";
  }

  if (!document.querySelector('input[type="checkbox"]:checked')) {
    alert("Please select at least one of the following criteria to create your unique password!")
  }
  // For loop increments based on desired length and math random helps generate a number, math floor rounding the decimal place down
  // This will then identify which number in the character strings that will display in the result window based on the users selection criteria
  for (let i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }
  result.value = password;
}


// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);




