// Assignment Code

var characterAmountEl;
var includeUppercaseEl;
var includeNumbersEl;
var includeSymbolsEl;
var passwordDisplay = document.getElementById("password")

var Uppercase_char_codes = arrayFromLowToHigh(65, 90);
var Lowercase_char_codes = arrayFromLowToHigh(97,122);
var Numbers_char_codes = arrayFromLowToHigh(48,57);
var Symbols_char_codes = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(
arrayFromLowToHigh(91,96));

//On click function

document.getElementById("generate").onclick = function(){

  Explanation = continueOrnot();
  characterAmountEl = prompt("Choose your password length: min 8 and max 128 characters")
  includeUppercaseEl = confirm("Do you wish to add uppercase characters?")
  includeNumbersEl = confirm("Do you wish to add numbers?")
  includeSymbolsEl = confirm("Do you wish to add symbols?")


  var password = generatePassword(characterAmountEl, includeUppercaseEl, includeNumbersEl, includeSymbolsEl)
  passwordDisplay.innerText = password;
  
  }

  function continueOrnot(event){
  
    Explanation = confirm("Hi! To include a character type click 'Ok' or 'Cancel' to no include it")

    if (Explanation === true){
      
      return true;
    }
    else{
    
      event.preventDefault(); //prevent page from continue loading after pressing cancel
     
    }
    
  }

  //Generating the password

  function generatePassword (characterAmountEl, includeUppercaseEl, includeNumbersEl, includeSymbolsEl) {

    //Default to lowercase character codes
    let charCodes = Lowercase_char_codes

   //Using concat method to call elements within the array inside the function arrayFromLowToHigh

    if (includeUppercaseEl) charCodes = charCodes.concat(Uppercase_char_codes)
    if (includeNumbersEl) charCodes = charCodes.concat(Numbers_char_codes);
    if (includeSymbolsEl) charCodes = charCodes.concat(Symbols_char_codes);
    
    var passwordCharacters = []
    for( let i = 0; i < characterAmountEl; i++){
        var character = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    
    return passwordCharacters.join('');
    
    }

    function arrayFromLowToHigh(low, high){

      var array = []
      for ( let i = low; i<= high; i++){
      
      array.push(i)
      
      }
      
      return array
      
      
      }





















 






