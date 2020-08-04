// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {

  // Prompting and establishing variables //
  var passLength = prompt("Enter a password length from 8 to 128");

  // Changing the string from the prompt to a numerical value //
  parseInt(passLength);

  // Validating the selected password length is between 8 and 12 characters
  if (passLength >= 8 && passLength <= 128) {

    var passSpecial = confirm("Do you want to include special characters?");
    var passUpper = confirm("Do you want to include Uppercase Letters?");
    var passLower = confirm("Do you want to include Lowercase letters?");
    var passNumerical = confirm("Do you want to add numbers to your password?");

    if (passSpecial === false && passUpper === false && passLower === false && passNumerical === false) {
      alert("You need to pick at least one character type for your password!!")
      generatePassword();
    }
    else {
      var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
      var numerical = '0123456789';
      var specialChar = '!@#$%&*?/+-_~';
      var passGen = '';

      // Clearing password string //
      password = '';


      // Validating the selected password length is between 8 and 12 characters
      // Combining chosen password criteria into one big string //
      if (passSpecial === true) {
        passGen = passGen.concat(specialChar);
      }

      if (passUpper === true) {
        passGen = passGen.concat(upperCase);
      }

      if (passLower === true) {
        passGen = passGen.concat(lowerCase);
      }

      if (passNumerical === true) {
        passGen = passGen.concat(numerical);
      }

      // Taking newly created string and selecting random characters from it //
      for (i = 0; i < passLength; i++) {
        password += passGen.charAt(Math.floor(Math.random() * passGen.length));
      }
    }

  }

  else {
    alert("You didn't select a number between 8 and 128! Try again!");
    generatePassword();
  }

  // Sending the chosen password back to the index file and clearing the temp passGen string //
  return password;
  passGen = '';

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
