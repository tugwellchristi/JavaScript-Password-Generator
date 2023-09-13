// Assignment code here
// 1. When clicking the button to generate a password, I am presented with a series of prompts for password criteria. 
// 2. When prompted for password criteria, I select which criteria to include in the password. 
// 3. When prompted for the length of the password, I choose a length of at least 8 characters and no more than 128 characters. 
// 5. When I answer each prompt, my input should be validated and at least one character type should be selected. 
// 6. When all prompts are answered, a password is generated that matches the selected criteria. 
// 7. When the password is generated, the password is either displayed in an alert or written to the page. 

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "~!@#$%^&*"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
