// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts user with password criteria
//var passwordCriteria = alert("Passwords must: Be a minimum of eight (8) characters in length. Be memorized; if a password is written down it must be secure. Contain at least one (1) character from three (3) of the following categories: Uppercase letter (A-Z). Lowercase letter (a-z). Digit (0-9). Special character (~`!@#$%^&*()+=_-{}[]\|:;”’?/<>,.). Be private. Passwords must not: Contain a common proper name, login ID, email address, initials, first, middle or last name. Have been used in the last year or last three passwords, whichever is greater.")
do {
  var passwordLength = prompt("Please pick a password length between 8 and 128 characters long.");
}
while (passwordLength < 8 || passwordLength > 128);
var lowercase = confirm("Would you like to include lowercase letters?");
var uppercase = confirm("Would you like to include uppercase letters?");
var numbers = confirm("Would you like to include numbers?");
var specialChars = confirm("Would you like to include special characters?");

// Write password to the #password input
function writePassword(passwordLength, lowercase, uppercase, numbers, specialChars) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (i = 0; i < passwordLength; i++) {
    if (lowercase) {

    }
    if (uppercase) {

    }
    if (numbers) {

    }
    if (specialChars) {

    }
  }

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
