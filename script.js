// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseTrue;
var numberTrue;
var specialTrue;

//Determine the length of the password
function determineLength(){
  passwordLength = prompt("How many characters would you like your password to be? (between 8 and 128):");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("Next you will be asked if you'd like your password to contain uppercase letters, numbers, and symbols.");
    }
    return passwordLength;
}

//Determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
  uppercaseTrue = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseTrue = uppercaseTrue.toLowerCase();

    if (uppercaseTrue === null || uppercaseTrue === ""){
      alert("Please answer yes or no");
      determineUppercase();

    }else if (uppercaseTrue === "yes" || uppercaseTrue === "y" ){
      uppercaseTrue = true;
      return uppercaseTrue;

    }else if (uppercaseTrue === "no" || uppercaseTrue === "n" ){
      uppercaseTrue = false;
      return uppercaseTrue;
    
    }else {
      alert("Please answer yes or no");
      determineUppercase();
    }
    return uppercaseTrue;
}

//Determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberTrue = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberTrue = numberTrue.toLowerCase();

    if (numberTrue === null || numberTrue === ""){
      alert("Please answer yes or no");
      determineNumbers();

    }else if (numberTrue === "yes" || numberTrue === "y" ){
      numberTrue = true;
      return numberTrue;

    }else if (numberTrue === "no" || numberTrue === "n" ){
      numberTrue = false;
      return numberTrue;
    
    }else {
      alert("Please answer yes or no");
      determineNumbers();
    }
    return numberTrue;
}

//Determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialTrue = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialTrue = specialTrue.toLowerCase();

    if (specialTrue === null || specialTrue === ""){
      alert("Please answer yes or no");
      determineSpecial();

    }else if (specialTrue === "yes" || specialTrue === "y" ){
      specialTrue = true;
      return specialTrue;

    }else if (specialTrue === "no" || specialTrue === "n" ){
      specialTrue = false;
      return specialTrue;
    
    }else {
      alert("Please answer yes or no");
      determineSpecial();
    }
    return specialTrue;
}

function generatePassword(){
  determineLength();
  determineUppercase();
  determineNumbers();
  determineSpecial();
  

var characters = lowercaseChar;
var password = "";
if (uppercaseTrue && numberTrue && specialTrue){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseTrue && numberTrue){
  characters += uppercaseChar + numberChar;

}else if (numberTrue && specialTrue){
  characters += numberChar + specialChar;

}else if (uppercaseTrue && specialTrue){
  characters += uppercaseChar + specialChar;

}else if (uppercaseTrue){
  characters += uppercaseChar;

}else if(numberTrue){
  characters += numberChar;

}else if (specialTrue){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var genPassword = "";
 genPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = genPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);