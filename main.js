// Selectors & Event Listeners

    //user entry and math variables
document.getElementById('userEntry').addEventListener('input', userInput);
let measurement = '';
let fracValue = '';
let fracAnswer = '';

    // output values
let decInch = document.getElementById('decInch');
let decInchUp = document.getElementById('decInchUp');
let decInchDown = document.getElementById('decInchDown');
let decMM = document.getElementById('decMM');
let decMMUp = document.getElementById('decMMUp');
let decMMDown = document.getElementById('decMMDown');
let fracInch = document.getElementById('fracInch');
let fracInchUp = document.getElementById('fracInchUp');
let fracInchDown = document.getElementById('fracInchDown');

    //dropdown menu divs
document.getElementById('toolDD').addEventListener('click', function() {toolMenu()});
document.getElementById('conversionDD').addEventListener('click', function() {converterMenu()});

    //Refresh button
document.getElementById('refresh').addEventListener('click', function(){refresh()});

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
    if (conversionSelector === "mm to inches" || conversionSelector === 'inches to mm - Decimal') {
        userString = userEntry.value;
        measurement = parseInt(userString);
        convert(measurement);
    } else if (conversionSelector === "inches to mm - Fractional") {
        userString = userEntry.value;
        measurement = math.fraction(userString);
        measurement = math.number(measurement);
        convert(measurement);
    } 
    
}

function refresh() {
    document.getElementById('userEntry').value = '';
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
    document.getElementById('toolDropDown').classList.add('hidden');
    // if (toolName.innerHTML === "Measurement Converter") {
    //     window.location.replace('https://clarko1391.github.io/Shop-APPrentice/index.html');
    // } else if (toolName.innerHTML === "Tap & Die Reference Chart") {
    //     window.location.replace('https://clarko1391.github.io/Shop-APPrentice/tapChart.html')
    // }

    if (toolName.innerHTML === "Measurement Converter") {
        window.location.replace('http://127.0.0.1:5501/index.html');
    } else if (toolName.innerHTML === "Tap & Die Reference Chart") {
        window.location.replace('http://127.0.0.1:5501/tapChart.html');
    }
}

    //Change header text of conversion based on which option is chosen
function convChange () {
    conversionSelector = event.target.innerHTML;
    conversion.innerHTML = conversionSelector;
    document.getElementById('converterDropDown').classList.add('hidden');
}

// function fracDisplay (fracValue) {
//     fracAnswer = fracValue.n + "/" + fracValue.d;
//     console.log(fracAnswer);
//     }

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
    math.config({
        number: 'Fraction'
      })
    switch (conversionSelector) {
        case "mm to inches":
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
            break;
        case "inches to mm - Decimal":
            oneUp = (measurement + 0.0625);
            oneDown = (measurement -  0.0625);
            answer = measurement / 0.0393701;
            answerUp = oneUp / 0.0393701;
            answerDown = oneDown / 0.0393701;
            answer = +answer.toFixed(2);
            answerUp = +answerUp.toFixed(2);
            answerDown = +answerDown.toFixed(2);
            oneUp = +oneUp.toFixed(2);
            oneDown = +oneDown.toFixed(2);
            decMM.innerHTML = answer;
            decMMUp.innerHTML = answerUp;
            decMMDown.innerHTML = answerDown;
            decInchUp.innerHTML = oneUp;
            decInch.innerHTML = measurement;
            decInchDown.innerHTML = oneDown;
            break;
        case "inches to mm - Fractional":   
            oneUp = (measurement + 0.0625);
            oneDown = (measurement -  0.0625);           
            answer = measurement / 0.0393701;
            answerUp = oneUp / 0.0393701;
            answerDown = oneDown / 0.0393701;
            fracUpCalc = math.fraction(math.add(math.fraction(userString), math.fraction('1/16')));
            fracInchUp.innerHTML = fracUpCalc.n + "/" + fracUpCalc.d;
            fracDownCalc = math.fraction(math.subtract(math.fraction(userString), math.fraction('1/16')));
            fracInchDown.innerHTML = fracDownCalc.n + "/" + fracDownCalc.d;
            answer = +answer.toFixed(2);
            answerUp = +answerUp.toFixed(2);
            answerDown = +answerDown.toFixed(2);
            oneUp = +oneUp.toFixed(2);
            oneDown = +oneDown.toFixed(2);
            decMM.innerHTML = answer;
            decMMUp.innerHTML = answerUp;
            decMMDown.innerHTML = answerDown;
            decInch.innerHTML = measurement;
            decInchUp.innerHTML = oneUp;
            decInchDown.innerHTML = oneDown;
            fracInch.innerHTML = userString;
    }

}

