// Assignment Code
var generateBtn = document.querySelector("#generate");
var allCharacters = {}
allCharacters.capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
allCharacters.lower = "abcdefghijklmnopqrstuvwxyz".split("");
allCharacters.numbers = "1234567890".split("");
allCharacters.special = "~!@#$%^&*+".split("");

var password = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword(){
var pass = {};
var v = [];
  // Ask the desired length of the password between 8 and 128
  var length = prompt("How many characters should the password have? (Choose between 8 and 128 characters)");
  if(length === null){
    return;
  }
  else if (length <= 8 || length >= 128){
      prompt("Choose between 8 and 128 characters");
    };
  // Ask if user wants lowercase, uppercase, numeric, and/ or special characters. Place requested types of characters in pass{} as a property.
  //include array as the value.
   var iscapital = confirm("Would you like to include capital letters?");
   if(iscapital){
     pass["capital"] = allCharacters.capital;
   }; 
   var islowercase = confirm("Would you like to include lowercase letters?");
   if(islowercase){
     pass["lowercase"] = allCharacters.lower;
   };
   var isnumbers = confirm("Would you like to include numbers?");
   if(isnumbers){
     pass["numbers"] = allCharacters.numbers;
   };
   var isspecial = confirm("Would you like to include special characters?");
   if(isspecial){
     pass["special"] = allCharacters.special;
   };

   generatePassword();

      function generatePassword(){
        // for(i=0; i <= pass.length; i++){
          var count = 1;
          while( count <= length){
            //randomly choose a property from pass{}
                var types = Object.keys(pass);
                var rn = Math.floor(Math.random() * (types.length));
                var t = types[rn];
                var value = pass[types[rn]];
                  //choosing a random value from the random property chosen
                var vn = Math.floor(Math.random() * (value.length));
                var v = value[vn];
                //push chosen random values into password[]
                password.push(v);
                count++
          //clearing password[] to generate new random password
          if(password.length > length){
              password = [];
              count = 1;
          };

          };
         
        };
        //password is changed to string and displayed on the page
        var passwordText = password.join("");
        alert("Your randomly generated password is " + passwordText);
      };
    
