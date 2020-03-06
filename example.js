
var characterAmountLength = document.getElementById("characterAmountLength")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var form = document.getElementById("passwordGeneratorForm")
var includeUppercaseEl = document.getElementById("includeUppercase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolEl = document.getElementById("includeSymbols")

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
})

function generatePassword(){








}


//When I scroll the range bar the numbers will change accondingly 
function synccharacterAmount(e) {

var value = e.target.value

characterAmountNumber.value = value
characterAmountLength.value = value

}