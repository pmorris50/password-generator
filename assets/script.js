// Assignment Code
//Defrining variables for password criteria
var upperCase = ['a', 'b', 'c', 'd']
//prompt user for password criteria

// Length of password has to be at least 8 characters and no more than 128 characters

// Password needs to include lowercase, uppercase, numeric, and/or special characters


// My Psuedo Code
//1. Prompt user to determine pass length (must be between 8-128 characters ) 
// 2. create function to prompt user for password options
    //a. confirm - Would you like to include lower case, uupper case, special, numbers. 4 con
// 3. 






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(
  
) {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//BLOCK
//code for lower case letter array where each letter is separate string, var = lcArray
var alphabet = ["a, b, c, d, e, f, g, h, i, j ,k , l, m, n, o, p, q, r, s, t, u, v, x, y, z"]
// console.log(alphabet);
var lcArray =alphabet.toString().split(",") //This is my lowercase letter array 
console.log(lcArray)
var inclLowerCase = confirm('Would you like to include lower case letters.'); //prompt user to include lower case letters

// var for Upper Case Array. Use upCaseArray for for loop
var upCaseArray = alphabet.toString().toUpperCase().split(",");
console.log(upCaseArray);
//BlOCK

//array for special characters
var specChar = [
  "!, @, #, $, %, ^, &, *, (, ), -, _, =, +, `, ~, <, ., >, ?, :, ;, [, {, ], }, ,"
]
var specChar1 = specChar.toString().split(','); //variable to use for forloop
console.log(specChar1); 
//Block

//array for numbers
//BLOCK
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; //array for number character
console.log(num);
//BLOCK

