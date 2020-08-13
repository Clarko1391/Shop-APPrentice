// Selectors & Event Listeners
document.getElementById('userEntry').addEventListener('input', userInput);
let measurement = '';
let conversionSelector = document.getElementById('conversion').innerText
let decInch = document.getElementById('decInch');
let decInchUp = document.getElementById('decInchUp');
let decInchDown = document.getElementById('decInchDown');
let decMM = document.getElementById('decMM');
let decMMUp = document.getElementById('decMMUp');
let decMMDown = document.getElementById('decMMDown');
document.getElementById('toolDD').addEventListener('click', function() {toolMenu()});
document.getElementById('conversionDD').addEventListener('click', function() {converterMenu()});
// window.onclick = function() {hideDropDown()};


// Functions
function userInput (){
    userString = userEntry.value;
    measurement = parseInt(userString);
    convert(measurement);
    console.log(typeof(measurement));
}

function toolMenu (){
    document.getElementById(`toolDropDown`).classList.toggle('hidden');
    ;
}

function converterMenu (){
    document.getElementById(`converterDropDown`).classList.toggle('hidden');
    ;
}

// function hideDropDown () {
//     //Hide toolDropDown if user clicks outside dropdown
//     if (document.getElementById('toolDropDown').classList.contains('hidden')) {
//         console.log('dropdown hidden');
//     } else {
//         document.getElementById('toolDropDown').classList.toggle('hidden');
//     }
       
// }

function convert(measurement) {
    if (conversionSelector === "mm to inches") {
        decMM.innerHTML = measurement;
        oneUp = (measurement + 1);
        decMMUp.innerHTML = oneUp
        oneDown = (measurement - 1);
        decMMDown.innerHTML = oneDown
        answer = measurement * 0.0393701;
        answerUp = oneUp * 0.0393701;
        answerDown = oneDown * 0.0393701;
        answer = +answer.toFixed(2);
        answerUp = +answerUp.toFixed(2);
        answerDown = +answerDown.toFixed(2);
        decInch.innerHTML = answer;
        decInchUp.innerHTML = answerUp;
        decInchDown.innerHTML = answerDown;

    } else if (conversionSelector === "inches to mm - Decimal") {
        decInch.innerHTML = measurement;
        answer = measurement/0.0393701;
        decMM.innerHTML = answer

    } else if (conversionSelector === "inches to mm - Fractional") {

    }
}

