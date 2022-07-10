// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create an array with all criteria
const lowercaseArray = [
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
const uppercaseArray = [
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
const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialcharactersArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "=",
  "+",
];
let password = [];
let passwordArray = [];
function generatePassword() {
  // research parseInt() - returns string as a number (if they spell number out)
  var characterLength = prompt(
    "How many characters would your like the password to be?"
  );

  characterLength = parseInt(characterLength);

  console.log(characterLength);

  // series of conditional statements

  // set up conditional to return null if characterLength is greater than 128
  if (characterLength > 128) {
    alert("Must choose a number between 8 and 128");
  } else {
    // set up conditional to return null if characterLength is less than 8
    if (characterLength < 8) {
      alert("Must choose a number between 8 and 128");
    } else {
      // Ask if they want upper case letters - confirm
      var upperCase = confirm(
        "Do you want uppercase characters in your password?"
      );
      console.log(upperCase);
      // Ask if they want lower case letters - confirm
      var lowerCase = confirm(
        "Do you want lowercase characters in your password?"
      );
      console.log(lowerCase);
      // Ask if they want numbers - confirm
      var numbers = confirm("Do you want numbers in your password?");
      console.log(numbers);
      // Ask if they want special characters - confirm
      var specialCharacters = confirm(
        "Do you want special characters in your password?"
      );
      console.log(specialCharacters);
      // if conditional - check for length between 8 - 128 characters
      // make a conditional to check if the user selected any of the above options (confim()  )

      if (characterLength > 7 && characterLength < 129) {
        // if conditional - ask for uppercase is true
        // push content in uppercase array and add it to new array
        // if false - skip to next condition
        if (upperCase === true) {
          passwordArray = passwordArray.concat(uppercaseArray);
        }
        // if conditional - ask for lowercase is true
        // push content in lowercase array and add it to new array
        // if false - skip to next condition
        if (lowerCase === true) {
          passwordArray = passwordArray.concat(lowercaseArray);
        }
        // if conditional - ask for numbers is true
        // push content in numbers array and add it to new array
        // if false - skip to next condition
        if (numbers === true) {
          passwordArray = passwordArray.concat(numbersArray);
          // if conditional - ask for special character is true
          // push content in special character array and add it to new array
          // if false - end
          if (specialCharacters === true) {
            passwordArray = passwordArray.concat(specialcharactersArray);
          }
          for (let i = 0; i < characterLength; i++) {
            password.push(
              passwordArray[Math.floor(Math.random() * passwordArray.length)]
            );
          }
        }
      }

      // Create a for loop that would iterate the character length chosen that will randomly select from our password array
      return password;
    }
  }
}
// Write password to the #password input
function writePassword() {
  var passwordDisplay = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;
  password = [];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
