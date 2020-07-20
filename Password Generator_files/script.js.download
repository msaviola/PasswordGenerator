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


   while(true){
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


    const useSpecialchar = confirm('Do you want special characters?');
      if (useSpecialchar) {
        passwordText = passwordText.concat(specialchar);
        }
  
      else{
        passwordText;
        };

    const useNumbers = confirm('Do you want numbers?');
        if (useNumbers) {
          passwordText = passwordText.concat(numbers);
          }
    
        else{
          passwordText;
          };  

        

    
      //console.log(randPwLen);
      var randPassword = Array(randPwLen).fill(passwordText).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
      //return randPassword; 
      //console.log (randPassword);
       document.getElementById('password').textContent=randPassword;
       break;
  
    }
});