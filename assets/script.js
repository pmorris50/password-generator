// Assignment Code
//Defrining variables for password criteria
var upperCase = ['a', 'b', 'c', 'd']
//prompt user for password criteria

// Length of password has to be at least 8 characters and no more than 128 characters

// Password needs to include lowercase, uppercase, numeric, and/or special characters










var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
