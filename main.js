// Selectors & Event Listeners

    //user entry and math variables
document.getElementById('userEntry').addEventListener('input', userInput);
let measurement = '';
let fracValue = '';
let fracAnswer = '';
let decimalNum = '';
let decValue = '';
let wholeNum = '';
let fracNum = '';
let fracWrite = '';

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

    // Event listener to close dropdown menu if user clicks outside
window.addEventListener('click', function(){hideDropDown()});
let i = 0;

    //Refresh button
document.getElementById('refresh').addEventListener('click', function(){refresh()});

    // toolSelector and changers
let toolName = document.getElementById('toolName');
const tDD1 = document.getElementById('tDD1');
tDD1.addEventListener('click', function (){toolChange()});
const tDD2 = document.getElementById('tDD2');
tDD2.addEventListener('click', function (){toolChange()});


    // conversionSelector and changers
let conversion = document.getElementById('conversion');
let conversionSelector = document.getElementById('conversion').innerHTML;
const cDD1 = document.getElementById('cDD1');
cDD1.addEventListener('click', function() {convChange()});
const cDD2 = document.getElementById('cDD2');
cDD2.addEventListener('click', function() {convChange()});
const cDD3 = document.getElementById('cDD3');
cDD3.addEventListener('click', function() {convChange()});

    // Page selectors (section tags)
const cSBody = document.getElementById('cSBody');
const rMBody = document.getElementById('rMBody');
const tCBody = document.getElementById('tCBody');
const wSBody = document.getElementById('wSBody');
const dSBody = document.getElementById('dSBody');
const uABody = document.getElementById('uABody');

    // Chart Selectors (clicking on card will bring up chart)
const tCCard = document.getElementById('tCCard');
tCCard.addEventListener('click', function(){tCChange()});
const wSCard = document.getElementById('wSCard');
wSCard.addEventListener('click', function(){wSChange()});
const dSCard = document.getElementById('dSCard');
dSCard.addEventListener('click', function(){dSChange()});
const uACard = document.getElementById('uACard');
uACard.addEventListener('click', function(){uAChange()});

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

    // Remove user input and reset output values to original display
function refresh() {
    document.getElementById('userEntry').value = '';
    decInch.innerHTML = "Conversion";
    decInchUp.innerHTML = "One up";
    decInchDown.innerHTML = "One down";
    decMM.innerHTML = "Conversion";
    decMMUp.innerHTML = "One up";
    decMMDown.innerHTML = "One down";
    fracInch.innerHTML = "Conversion";
    fracInchUp.innerHTML = "One up";
    fracInchDown.innerHTML = "One down";
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
    switch (toolName.innerHTML) {
        case "Measurement Converter":
            cSBody.classList.remove('hidden');
            rMBody.classList.add('hidden');
            tCBody.classList.add('hidden');
            break;
        case "Reference Manuals":
            cSBody.classList.add('hidden');
            rMBody.classList.remove('hidden');
            tCBody.classList.add('hidden');
            break;
    }
}

function tCChange () {
    toolName.innerHTML = 'Tap and Die Chart';
        cSBody.classList.add('hidden');
        rMBody.classList.add('hidden');
        tCBody.classList.remove('hidden');
        wSBody.classList.add('hidden');
        dSBody.classList.add('hidden');
        uABody.classList.add('hidden');
}

function wSChange () {
    toolName.innerHTML = 'Wrench Size Chart';
        cSBody.classList.add('hidden');
        rMBody.classList.add('hidden');
        tCBody.classList.add('hidden');
        wSBody.classList.remove('hidden');
        dSBody.classList.add('hidden');
        uABody.classList.add('hidden');
}

function dSChange () {
    toolName.innerHTML = 'Drill Bit Size Chart';
        cSBody.classList.add('hidden');
        rMBody.classList.add('hidden');
        tCBody.classList.add('hidden');
        wSBody.classList.add('hidden');
        dSBody.classList.remove('hidden');
        uABody.classList.add('hidden');
}

function uAChange () {
    toolName.innerHTML = 'User Added Reference Chart';
        cSBody.classList.add('hidden');
        rMBody.classList.add('hidden');
        tCBody.classList.add('hidden');
        wSBody.classList.add('hidden');
        dSBody.classList.add('hidden');
        uABody.classList.remove('hidden');
}

    //Change header text of conversion based on which option is chosen
function convChange () {
    conversionSelector = event.target.innerHTML;
    conversion.innerHTML = conversionSelector;
    document.getElementById('converterDropDown').classList.add('hidden');
}

    //Hide dropdown menu if user clicks outside of it
function hideDropDown () {
    document.getElementById('toolDD').addEventListener('click', function(){clear()});
    document.getElementById('conversionDD').addEventListener('click', function(){clear()});
    if (i >= 1 && !document.getElementById('toolDropDown').classList.contains('hidden')) {
        document.getElementById('toolDropDown').classList.toggle('hidden');
        i = 0;
    } else if (i >= 1 && !document.getElementById('converterDropDown').classList.contains('hidden')) {
        document.getElementById('converterDropDown').classList.toggle('hidden');
        i = 0;
    } else{
        i++;
    }

    function clear () {
        i = 0;
    }    
}

//Math functions
    //Display decimal remainders as fractions in 16ths of an inch
function fracConvert(decimalNum, fracWrite) {
    decValue = decimalNum - Math.floor(decimalNum);
    wholeNum = Math.floor(decimalNum);
    fracNum = Math.round(decValue * 16);
    fracWrite.innerHTML = wholeNum + ' ' + fracNum + '/16';
}

    //Convert improper fractions in inches to mm - Fractional to mixed numbers
    // USE ONLY OBJECTS FROM THE MATH.FRACTION() AS INPUT
function fracMix(fracValue, fracWrite) {
    if (fracValue.n > 16) {
        wholeNum = Math.floor(fracValue.n / 16);
        fracNum = fracValue.n % 16;
        fracWrite.innerHTML = wholeNum + ' ' + fracNum + '/' + fracValue.d;
    } else {
        fracWrite.innerHTML = fracValue.n + '/' + fracValue.d;
    }
}

    //Conversion between mm to inches and vice versa in both decimal and fractional
function convert(measurement) {
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
            fracConvert(answer, fracInch);
            fracConvert(answerUp, fracInchUp);
            fracConvert(answerDown, fracInchDown);
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
            fracConvert(measurement, fracInch);
            fracConvert(oneUp, fracInchUp);
            fracConvert(oneDown, fracInchDown);
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
            fracMix(fracUpCalc, fracInchUp);
            fracDownCalc = math.fraction(math.subtract(math.fraction(userString), math.fraction('1/16')));
            fracMix(fracDownCalc, fracInchDown);
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

