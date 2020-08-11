// Selectors & Event Listeners
const toolSelector = document.getElementById('tool').addEventListener('click', function(){console.log("ya")});
const conversionSelector = document.getElementById('conversionDD').addEventListener('click', function(){console.log('yaya')});
const toolName = document.getElementById('toolName');
const conversion = document.getElementById('conversion');
const decMMUp = document.getElementById('decMMUp');
const decMM = document.getElementById('decMM');
const decMMDown = document.getElementById('decMMDown');
const decInchUp = document.getElementById('decInchUp');
const decInch = document.getElementById('decInch');
const decInchDown = document.getElementById('decInchDown');
const fracInchUp = document.getElementById('fracInchUp');
const fracInch = document.getElementById('fracInch');
const fracInchDown = document.getElementById('fracInchDown');
const userEntry = document.getElementById('userEntry').addEventListener('input', function (){userInput()});
document.getElementById('refresh').addEventListener('click', console.log(distance));

// Functions
function userInput (){
    let distance = userEntry.value;
    console.log('this');
}

// function convert(conversionSelector, userEntry) {

// }