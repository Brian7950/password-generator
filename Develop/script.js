// Assignment code here

// password length
var passwordLength = window.prompt("Length of password?");
// if too short or too long ask again. 
if(passwordLength < 8 || passwordLength > 128){
  window.alert("Password must be betwee 8 - 128 characters long");
  var passwordLength = window.prompt("Length of password?");
}

//if length is correct continue with criteria 
while (passwordLength > 8 || passwordLength < 128 ){

var addLowerCase = window.confirm("Do you want to add lower case letters?");

var addUpperCase = window.confirm("Do you want to add UPPER case letters?");

var addNumbers = window.confirm("Do you want to inclue numbers?");
break;
}

console.log(passwordLength, addLowerCase, addUpperCase, addNumbers);


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
