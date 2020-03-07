
var characterAmountLength = document.getElementById("characterAmountLength")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var form = document.getElementById("passwordGeneratorForm")
var includeUppercaseEl = document.getElementById("includeUppercase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")
var passwordDisplay = document.getElementById("password-display")

var Uppercase_char_codes = arrayFromLowToHigh(65, 90);
var Lowercase_char_codes = arrayFromLowToHigh(97,122);
var Numbers_char_codes = arrayFromLowToHigh(48,57);
var Symbols_char_codes = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(
arrayFromLowToHigh(91,96));

characterAmountNumber.addEventListener("input", synccharacterAmount)
characterAmountLength.addEventListener("input", synccharacterAmount)

//Everytime I try to submit the form, this function bellow will be called

form.addEventListener("submit", e => {
e.preventDefault() //stop form from refreshing the page after submiting


var characterAmount = characterAmountNumber.value
var includeUppercase = includeUppercaseEl.checked //tells true or false if the box is checked
var includeNumbers = includeNumbersEl.checked
var includeSymbols = includeSymbolsEl.checked
var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
passwordDisplay.innerText = password;

})

function generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols) {

//Default to lowercase character codes
let charCodes = Lowercase_char_codes
if (includeUppercase) charCodes = charCodes.concat(Uppercase_char_codes);
if (includeNumbers) charCodes = charCodes.concat(Numbers_char_codes);
if (includeSymbols) charCodes = charCodes.concat(Symbols_char_codes);

var passwordCharacters = []
for( let i = 0; i < characterAmount; i++){
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


//When I scroll the range bar the numbers will change accondingly 

function synccharacterAmount(e) {

var value = e.target.value

characterAmountNumber.value = value
characterAmountLength.value = value

}



