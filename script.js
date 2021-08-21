// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "|",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
var lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var lettersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumber;
var confirmLowerCaseLetter;
var confirmUpperCaseLetter;

function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like in your password?"
  );

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert(
      "Your password must be between 8 and 128 characters! Please try again!"
    );
    return generatePassword();
  }

  confirmSpecialCharacter = confirm(
    "Would you like to include special characters?"
  );

  confirmNumber = confirm("Would you like to include numbers?");

  confirmUpperCaseLetter = confirm(
    "Would you like to include an uppercase letter?"
  );

  confirmLowerCaseLetter = confirm(
    "Would you like to include a lower case letter?"
  );

  var passwordCharacters = [];

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }

  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmUpperCaseLetter) {
    passwordCharacters = passwordCharacters.concat(lettersUpper);
  }

  if (confirmLowerCaseLetter) {
    passwordCharacters = passwordCharacters.concat(lettersLower);
  }

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

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
