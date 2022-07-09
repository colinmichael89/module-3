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
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
function generatPassword() {}
// Ask user for length of characters - prompt
var characterLength = prompt(
  "How many characters would your like the password to be?"
);
console.log(characterLength);
// Ask if they want upper case letters - confirm
var upperCase = prompt("Do you want uppercase characters in your password?");
console.log(upperCase);
// Ask if they want lower case letters - confirm
var lowerCase = prompt("Do you want lowercase characters in your password?");
console.log(lowerCase);
// Ask if they want numbers - confirm
var numbers = prompt("Do you want numbers in your password?");
console.log(numbers);
// Ask if they want special characters - confirm
var specialCharacters = prompt(
  "Do you want special characters in your password?"
);
console.log(specialCharacters);
// if conditional - check for length between 8 - 128 characters
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
    for (let index = 0; index < characterlength; index++) {
      password.push(
        passwordArray[Math.floor(Math.random() * passwordArray.length)]
      );
    }
  } else {
    alert("Must choose a number between 8 and 128");
  }
}
// Create a for loop that would iterate the character length chosen that will randomly select from our password array
console.log(password);

// Write password to the #password input
function writePassword() {
  var passwordDisplay = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;
  password = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
