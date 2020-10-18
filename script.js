// Assignment Code
let generateBtn = document.querySelector("#generate");

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let specialChar = "!@#$%^&*()_+-=";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let password = "";
  let genPassword = "";

  promptAmount = parseInt(prompt("How many characters would you like for your password? Choose between 8 and 128"));
 
  if (!promptAmount) {
    return alert("Please enter a value amount!");
  }else if (promptAmount > 128 || promptAmount < 8) {
    return alert ("Must choose a value between 8 and 128, hit the button to try again!");
  }else {
    alert("Your password will be " + promptAmount + " characters long!");
  };

  let confirmLower = confirm("Do you want lowercase letters?");
  let confirmNumbers = confirm("Do you want numbers?");
  let confirmUpper = confirm("Do you want uppercase letters?");
  let confirmSpecial = confirm("Do you want special characters?");

  
  
  if (confirmLower === true) {
    password = password.concat(genPass(lowerChar));
    // concat all  lowerChar to genPassword
    genPassword = genPassword.concat(lowerChar); // genPassword = "abcdefg..."
  }

  if (confirmNumbers === true) {
    password = password.concat(genPass(numChar));
    // genPassword = "abcdefg...0123456789"
    genPassword = genPassword.concat(numChar);
  }

  if (confirmUpper === true) {
    password = password.concat(genPass(upperChar));
    // genPassword = "abcdefg...0123456789ABCDEFG..."
    genPassword = genPassword.concat(upperChar);
  }

  if (confirmSpecial === true) {
    password = password.concat(genPass(specialChar));
    genPassword = genPassword.concat(specialChar);
    // genPassword = all the things
  }

  while (password.length < promptAmount) {
   password = password.concat(genPass(genPassword));
  }
  
  return password;
}


function genPass(str) {
  return str[Math.floor(Math.random() * str.length)].toString();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


