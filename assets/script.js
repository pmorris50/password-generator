// Assignment Code
//Defrining variables for password criteria
//prompt user for password criteria

// Length of password has to be at least 8 characters and no more than 128 characters

// Password needs to include lowercase, uppercase, numeric, and/or special characters


// My Psuedo Code
//1. Prompt user to determine pass length (must be between 8-128 characters ) 
// 2. create function to prompt user for password options
//a. confirm - Would you like to include lower case, uupper case, special, numbers. 4 con




var alphabet = ["a, b, c, d, e, f, g, h, i, j ,k , l, m, n, o, p, q, r, s, t, u, v, x, y, z"]
  // console.log(alphabet);
var lcArray =alphabet.toString().split(",") //This is my lowercase letter array 
//console.log(lcArray)


// var for Upper Case Array. Use upCaseArray for for loop
var upCaseArray = alphabet.toString().toUpperCase().split(",");
//console.log(upCaseArray);


 //array for special characters
var specChar = [
  "!, @, #, $, %, ^, &, *, (, ), -, _, =, +, `, ~, <, ., >, ?, :, ;, [, {, ], }, ,"
]
var specCharArray = specChar.toString().split(','); 
// console.log(specChar1); 


//array for numbers
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; 
// console.log(num);


function userOptions () {

  var passLength = parseInt(prompt('How many characters do you want your password to be? '));
  if (Number.isNaN(passLength)) {
    alert('Password must be a numeric number');
    return null;
  }

  if (passLength > 128 || passLength < 8) {
    alert('Password must be a numeric number between 8-128');
    return null;
  }

//  console.log(length);
  var incLowerCase = confirm('Would you like to include lower case letters in your password?');
  var incUpperCase = confirm('Would you like to include upper case letters in your password?');
  var incSpecial = confirm('Would you like to include special characters in your password?');
  var incNumbers = confirm('Would you like to include numbers in your password?');



  // console.log(incLowerCase);
  // console.log(incUpperCase);
  // console.log(incSpecial);
  // console.log(incNumbers);

  if (
    incLowerCase === false &&
    incNumbers === false &&
    incSpecial === false &&
    incUpperCase === false
  ) {
    alert("You must confirm at least 1 character option");

    //this is the return if a condition is not met returning null ends the function
    return null;
  }
  //object that stores users inputs
  var passwordCriteria = {
    passLength: passLength,
    incLowerCase: incLowerCase,
    incNumbers: incNumbers,
    incUpperCase: incUpperCase,
    incSpecial: incSpecial
    
  };
  //console.log(passwordCriteria);
  return passwordCriteria;
  

// If something happens return this elsie if this is met return this

//function to randomize array data


};
//functino to shuffle array order. replace arr with array name
function shufArray(arr){
  var randomInteger = Math.floor(Math.random() *arr.length);
  var randomCharacter = arr[randomInteger];
  return randomCharacter;
}


function generatePassword(){
var userChoice = userOptions(); //what did the user select
var acceptedCharacters = []; //combines arrays of what user selected 
var guaranteeCharacters =[]; //pulls 1 character from each user selection
var results = []; //characters that will go in the password

//if user did not select do nothing
if(!userChoice) 
return null;

if(userChoice.incLowerCase){
  acceptedCharacters = acceptedCharacters.concat(lcArray);
  guaranteeCharacters.push(shufArray(lcArray));
  //return acceptedCharacters;

};
if(userChoice.incUpperCase){
  acceptedCharacters = acceptedCharacters.concat(upCaseArray)
  guaranteeCharacters.push(shufArray(upCaseArray));
  //return acceptedCharacters;
  
};
if(userChoice.incNumbers){
  acceptedCharacters = acceptedCharacters.concat(numberArray);
  guaranteeCharacters.push(shufArray(numberArray));
  //return acceptedCharacters;
}
if(userChoice.incSpecial){
  acceptedCharacters = acceptedCharacters.concat(specCharArray);
  guaranteeCharacters.push(shufArray(specCharArray));
  //return acceptedCharacters;
}





//for loop to grab password character length from acceptedCharacters
 for (var i = 0; i < userChoice.passLength; i++){
  //results.push(shufArray(guaranteeCharacters));
  results.push(shufArray(acceptedCharacters));
  //console.log(results);
 }
 for (var i=0; i<guaranteeCharacters; i++){
  
 }
return results.join('');
}
//console.log(generatePassword);



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

 





 
 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



