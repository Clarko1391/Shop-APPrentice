// Selectors & Event Listeners

    //user entry and main math variable
document.getElementById('userEntry').addEventListener('input', userInput);
let measurement = '';

    // output values
let decInch = document.getElementById('decInch');
let decInchUp = document.getElementById('decInchUp');
let decInchDown = document.getElementById('decInchDown');
let decMM = document.getElementById('decMM');
let decMMUp = document.getElementById('decMMUp');
let decMMDown = document.getElementById('decMMDown');

    //dropdown menu divs
document.getElementById('toolDD').addEventListener('click', function() {toolMenu()});
document.getElementById('conversionDD').addEventListener('click', function() {converterMenu()});

    // toolSelector and changers
let toolName = document.getElementById('toolName');
const tDD1 = document.getElementById('tDD1');
tDD1.addEventListener('click', function (){toolChange()});
const tDD2 = document.getElementById('tDD2');
tDD2.addEventListener('click', function (){toolChange()});
const tDD3 = document.getElementById('tDD3');
tDD3.addEventListener('click', function (){toolChange()});
const tDD4 = document.getElementById('tDD4');
tDD4.addEventListener('click', function (){toolChange()});

    // conversionSelector and changers
let conversion = document.getElementById('conversion');
let conversionSelector = document.getElementById('conversion').innerHTML;
const cDD1 = document.getElementById('cDD1');
cDD1.addEventListener('click', function() {convChange()});
const cDD2 = document.getElementById('cDD2');
cDD2.addEventListener('click', function() {convChange()});
const cDD3 = document.getElementById('cDD3');
cDD3.addEventListener('click', function() {convChange()});


// Functions

    // constantly grab user input for math functions
function userInput (){
    userString = userEntry.value;
    measurement = parseInt(userString);
    convert(measurement);
    console.log(conversionSelector);
}

    // Show/hide Tool Selection Menu by toggling 'hidden' class
function toolMenu (){
    document.getElementById('toolDropDown').classList.toggle('hidden');
}

    // Show/hide conversion Selection Menu by toggling 'hidden' class
function converterMenu (){
    document.getElementById('converterDropDown').classList.toggle('hidden');
}

    //Change header text of ToolSelector based on which option is chosen
function toolChange () {
    toolName.innerHTML = event.target.innerHTML;
    document.getElementById('toolDropDown').classList.add('hidden')
}

    //Change header text of conversion based on which option is chosen
function convChange () {
    conversionSelector = event.target.innerHTML;
    conversion.innerHTML = conversionSelector;
    document.getElementById('converterDropDown').classList.add('hidden')
}

    //Hide dropdown menu if user clicks outside of it (THIS IS CURRENTLY BROKEN)
// function hideDropDown () {
//     //Hide toolDropDown if user clicks outside dropdown
//     if (document.getElementById('toolDropDown').classList.contains('hidden')) {
//         console.log('dropdown hidden');
//     } else {
//         document.getElementById('toolDropDown').classList.toggle('hidden');
//     }  
// }

    //Math functions
function convert(measurement) {

        // mm to inches conversion
    if (conversionSelector === "mm to inches") {
        decMM.innerHTML = measurement;
        oneUp = (measurement + 1);
        decMMUp.innerHTML = oneUp;
        oneDown = (measurement - 1);
        decMMDown.innerHTML = oneDown;
        answer = measurement * 0.0393701;
        answerUp = oneUp * 0.0393701;
        answerDown = oneDown * 0.0393701;
        answer = +answer.toFixed(2);
        answerUp = +answerUp.toFixed(2);
        answerDown = +answerDown.toFixed(2);
        decInch.innerHTML = answer;
        decInchUp.innerHTML = answerUp;
        decInchDown.innerHTML = answerDown;

        // inches (decimal) to mm conversion
    } else if (conversionSelector === "inches to mm - Decimal") {
        oneUp = (measurement + 0.0625);
        oneDown = (measurement -  0.0625);
        answer = measurement / 0.0393701;
        answerUp = oneUp / 0.0393701;
        answerDown = oneDown / 0.0393701;
        answer = +answer.toFixed(2);
        answerUp = +answerUp.toFixed(2);
        answerDown = +answerDown.toFixed(2);
        decMM.innerHTML = answer;
        decMMUp.innerHTML = answerUp;
        decMMDown.innerHTML = answerDown;
        oneUp = +oneUp.toFixed(2);
        oneDown = +oneDown.toFixed(2);
        decInchUp.innerHTML = oneUp;
        decInch.innerHTML = measurement;
        decInchDown.innerHTML = oneDown;

        // inches (fractional) to mm conversion
    } else if (conversionSelector === "inches to mm - Fractional") {

    }
}

