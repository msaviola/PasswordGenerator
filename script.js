// Assignment Code

//defines generate button as a variable
var generateBtn = document.querySelector("#generate");
//var RandPasswordDisplayed = document.getElementById('password');

// Write password to the #password input

generateBtn.addEventListener("click", function () {
  // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
    var passwordText="";

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower ="abcdefghijklmnopqrstuvwxyz";
    var specialchar ="#@!%&()/";
    var numbers = "0123456789";
   
    var length = prompt("please enter a value between 8-128","length");   
    var randPwLen= parseInt(length);

    if(randPwLen<8 || randPwLen>128){
      alert("Invalid password length, try again")
      break;
    }

   
    const useUpperCase = confirm('Do you want upper case letters?');
    if (useUpperCase) {
    passwordText = passwordText.concat(upper);
    }
    else{
      passwordText;
         };

    const useLowerCase = confirm('Do you want lower case letters?');
    if (useLowerCase) {
      passwordText = passwordText.concat(lower);
      }

    else{
      passwordText;
      };

    
      console.log(randPwLen);
      var randPassword = Array(randPwLen).fill(passwordText).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      //return randPassword; 
       console.log (randPassword);
       document.getElementById('password').textContent=randPassword;
  

});

// Add event listener to generate button for writepassword function


//from glitch

// const lowerCase = 'abcde'.split('');
// const upperCase = 'ABCDE'.split('');

// const useLowerCase = confirm('Do you want lower case letters?');
// const useUpperCase = confirm('Do you want upper case letters?');

// let password = [];

// if (useLowerCase) {
//     for (let i = 0; i < 2; i++) {
//         password.push('randomCharacter');
//     }
// }

// if (useUpperCase) {
//     password = password.concat(upperCase);
// }

// console.log(shuffle(password).join(''));

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }