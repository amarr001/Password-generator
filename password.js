/* Assignment Code

//var generateBtn = document.querySelector("#generate");


//generate password
function generatePassword() {





}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)*/


//                      ~                          


// Generator functions

/*function getRandomLower(){

return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    }

function getRandomUpper(){

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    
    }

function getRandomNumber(){

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        
    }

function getRandomSymbol(){

    var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols [Math.floor(Math.random() * symbols.length)];
    
    }

console.log(getRandomSymbol());


document.getElementById("generate").onclick = function(){

   var length =  prompt("length 8 to 128");
   var generatedPassword = "";
   


    for(i = 0; i < length/5 ; i++){
    
        generatedPassword = generatedPassword + getRandomLower();

    }

    for(i = 0; i < length/5; i++) {

        generatedPassword = generatedPassword + getRandomSymbol(); 

    }
    for(i = 0; i< length/5; i++) {

        generatedPassword = generatedPassword + getRandomUpper();   

    }
    for(i = 0; i<length/5; i++) {

        generatedPassword = generatedPassword + getRandomNumber(); 

    }

        

   document.getElementById("password").innerHTML = generatedPassword;

}
*/
