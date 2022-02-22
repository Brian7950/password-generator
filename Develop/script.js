/*// Assignment code here*/

var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];
var charArray = ['!', '@', '#', '$', '%', '&', '*', '(', ')' ,'^'];

console.log(upperCaseArray, lowerCaseArray, numberArray, charArray);
var emptyPassword = [];

//function for shuffling array
var shuffle = function(array){
  for(var i = array.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

//creating final array 
/*var finalPW = function(array){
  for(var i = 0; i < array.length && array.length < passwordLength; i++ ){
    var temp = [i];
    
  }
  return temp;
}*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
var generatePassword = function() {

  var passwordLength = window.prompt("Choose length of password");
  console.log("logging password length " + passwordLength);

  // if length is anything other than number
  if(isNaN(passwordLength)) {
    window.alert("Please enter a valid length between 8-128");
    return generatePassword();
  }
  //if length is not between 8-128
  else if(passwordLength < 8 || passwordLength > 128){
    window.alert("Invalid length please enter a number between 8-128");
    return generatePassword();
  }
  console.log(passwordLength);


//criteria to add to password 
  var criteriaUpper = window.confirm("Do you want to add Capital letters?");
  console.log("criteriaUpper: " + criteriaUpper);

  var criteriaLower = window.confirm("Do you want to add lowercase letters?");
  console.log("criteriaLower: " + criteriaLower);

  var criteriaNumber = window.confirm("Do you want to add Numbers?");
  console.log("criteriaNumber: " + criteriaNumber);

  var criteriaSpecialCharacters = window.confirm("Do you want to add special characters?");
  console.log("criteriaSpecialCharacters: " + criteriaSpecialCharacters);

  //if no criteria is chosen (all false)
  if(!criteriaUpper && !criteriaLower && !criteriaNumber && !criteriaSpecialCharacters) {
    window.alert("You need to pick at least 1 of the options");
    return generatePassword();
  };

  //generate password based on criteria
  if(criteriaUpper){
    emptyPassword.push(...upperCaseArray);
    console.log(emptyPassword);
  }
  if(criteriaLower){
    emptyPassword.push(...lowerCaseArray);
    console.log(emptyPassword);
  }
  if(criteriaNumber){
    emptyPassword.push(...numberArray);
    console.log(emptyPassword)
  }
  if(criteriaSpecialCharacters){
    emptyPassword.push(...charArray);
    console.log(emptyPassword);
  }

  //shuffle the selected criteria 
  shuffle(emptyPassword);
  console.log(emptyPassword);

  //creating final array according to length 
var finalPW = function(array){
  for(var i = 0; i < array.length && array.length < passwordLength; i++ ){
    var temp = [i];
    
  }
  //return temp;
}

finalPW(emptyPassword);
console.log(emptyPassword);

//display password on page and remove "," 
  return emptyPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
