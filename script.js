// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //Prompts user with password criteria
  do {
    var passwordLength = prompt("Please pick a password length between 8 and 128 characters long.");
    if (passwordLength === null) {
      return;
    }
  }
  while (passwordLength < 8 || passwordLength > 128);
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialChars = confirm("Would you like to include special characters?");
  
  if (lowercase === false && uppercase === false && numbers === false && specialChars === false) {
    alert("Must select at least one criteria option!");
    return;
  }

  var criteria = [];
  var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|', '~'];

  //Pushes our various criteria specific arrays to our blank criteria array if user confirms they want them included.
  if (lowercase) {
    Array.prototype.push.apply(criteria, lowercaseArray);
  }
  if (uppercase) {
    Array.prototype.push.apply(criteria, uppercaseArray);
  }
  if (numbers) {
    Array.prototype.push.apply(criteria, numbersArray);
  }
  if (specialChars) {
    Array.prototype.push.apply(criteria, specialCharsArray);
  }

  //Calls the generatePassword function and saves return value to variable called password.
  var password = generatePassword(); 

  //Possibly puts the generated password into the text area on the page???
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //Function that uses a for loop that iterates the length of the password desired by user.
  //It generates a random character/letter/number each iteration based on criteria array built earlier and appends to new password array.
  function generatePassword() {
    var password = "";
    for (i = 0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random() * criteria.length);
      // Pushes randomCharacter to our password array each iteration.
      password += criteria[randomCharacter]; 
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
