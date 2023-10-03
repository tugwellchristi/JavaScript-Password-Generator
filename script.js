// Assignment code here
// 1. When clicking the button to generate a password, I am presented with a series of prompts for password criteria. 
// 2. When prompted for password criteria, I select which criteria to include in the password. 
// 3. When prompted for the length of the password, I choose a length of at least 8 characters and no more than 128 characters. 
// 5. When I answer each prompt, my input should be validated and at least one character type should be selected. 
// 6. When all prompts are answered, a password is generated that matches the selected criteria. 
// 7. When the password is generated, the password is either displayed in an alert or written to the page. 



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

const passwordBox = document.getElementById("password");
const length = 8;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "~!@#$%^&*";

const allChars = upperCase + lowerCase + number + symbol;

// Write password to the #password input
function writePassword() {
  let password = " ";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // passwordText.value = password;
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


