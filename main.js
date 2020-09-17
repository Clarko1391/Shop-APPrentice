// Selectors & Event Listeners

    //user entry and math variables (for both converter and calculator)
const userEntry = document.getElementById('userEntry');
userEntry.addEventListener('input', userInput);

////////////////////////////////////////////////////////////////////////
const calcIn1 = document.getElementById('calcIn1');
calcIn1.addEventListener('input', calcInput1);
const calcIn2 = document.getElementById('calcIn2');
calcIn2.addEventListener('input', calcInput2);
let calcValue1,
    calcVlaue2,
    calcDecimal, 
    calcWhole, 
    calcFraction, 
    calcFractionWhole, 
    calcFractionNumerator, 
    calcFracWrite,
    calcFractionWrite = '';

    // output values
const decInch = document.getElementById('decInch');
const decInchUp = document.getElementById('decInchUp');
const decInchDown = document.getElementById('decInchDown');
const decMM = document.getElementById('decMM');
const decMMUp = document.getElementById('decMMUp');
const decMMDown = document.getElementById('decMMDown');
const fracInch = document.getElementById('fracInch');
const fracInchUp = document.getElementById('fracInchUp');
const fracInchDown = document.getElementById('fracInchDown');
////////////////////////////////////////////////////////////////////////
const calcDec = document.getElementById('calcDec');
const calcFrac = document.getElementById('calcFrac');

    //dropdown menu divs
const toolSelector = document.getElementById('toolSelector');
    // toolMenu open
toolSelector.addEventListener('click', () => document.getElementById('toolDropDown').classList.toggle('hidden'));
    // converterMenu open
document.getElementById('conversionSelector').addEventListener('click', () => document.getElementById('converterDropDown').classList.toggle('hidden'));
    //opMenu open
document.getElementById('opValue').addEventListener('click', () => document.getElementById('opDropDown').classList.remove('hidden'));

    // Event listener to close dropdown menu if user clicks outside
window.addEventListener('click', function() {dropDownIterator(event)});

    //Refresh button
document.getElementById('refresh').addEventListener('click', refresh);

    // toolSelector and changers
const toolName = document.getElementById('toolName');
document.getElementById('tDD1').addEventListener('click', toolChange);
document.getElementById('tDD2').addEventListener('click', toolChange);
document.getElementById('tDD3').addEventListener('click', toolChange);


    // conversionSelector and changers
const conversion = document.getElementById('conversion');
let conversionSelector = document.getElementById('conversion').innerHTML;
document.getElementById('cDD1').addEventListener('click', convChange);
document.getElementById('cDD2').addEventListener('click', convChange);
document.getElementById('cDD3').addEventListener('click', convChange);

    //Operator Selectors and changers
const opValue = document.getElementById('opValue');
document.getElementById('opDD1').addEventListener('click', opChange);
document.getElementById('opDD2').addEventListener('click', opChange);
document.getElementById('opDD3').addEventListener('click', opChange);
document.getElementById('opDD4').addEventListener('click', opChange);

    // Calculator input clear
document.getElementById('calcIn1Reset').addEventListener('click', clearIn1);
document.getElementById('calcIn2Reset').addEventListener('click', clearIn2);

    // Page selectors (section tags)
const cSBody = document.getElementById('cSBody');
const rMBody = document.getElementById('rMBody');
const fCBody = document.getElementById('fCBody');
const tCBody = document.getElementById('tCBody');
const wSBody = document.getElementById('wSBody');
const dSBody = document.getElementById('dSBody');
const uABody = document.getElementById('uABody');

    // Add all consts to array for easier scaleability
const refPages = [cSBody, fCBody, rMBody, tCBody, wSBody, dSBody, uABody];

    // Back Button for refence manual
const backButton = document.getElementById('backButton');
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', goBack);

    // Chart Selectors (clicking on card will bring up chart)
document.getElementById('tCCard').addEventListener('click', function(){refChange(3)});
document.getElementById('wSCard').addEventListener('click', function(){refChange(4)});
document.getElementById('dSCard').addEventListener('click', function(){refChange(5)});
document.getElementById('uACard').addEventListener('click', function(){refChange(6)});

// Functions

// TOOL SELECTOR ELEMENTS (TOOL MENU ALWAYS DISPLAYED IN APP)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Change header text of ToolSelector based on which option is chosen
function toolChange() {
    toolName.innerHTML = event.target.innerHTML;
    document.getElementById('toolDropDown').classList.add('hidden');
    switch (toolName.innerHTML) {
        case "Measurement Converter":
            refPages.forEach(refPage => refPage.classList.add('hidden'));
            refPages[0].classList.remove('hidden');
            backButton.classList.add('hidden');
            toolSelector.classList.add('topBorderRadius');
            toolSelector.classList.remove('allBorderRadius');
            break;
        case "Fractional Calculator":
            refPages.forEach(refPage => refPage.classList.add('hidden'));
            refPages[1].classList.remove('hidden');
            backButton.classList.add('hidden');
            toolSelector.classList.remove('topBorderRadius');
            toolSelector.classList.add('allBorderRadius');
            break;
        case "Reference Manuals":
            refPages.forEach(refPage => refPage.classList.add('hidden'));
            refPages[2].classList.remove('hidden');
            backButton.classList.add('hidden');
            toolSelector.classList.remove('topBorderRadius');
            toolSelector.classList.add('allBorderRadius');
            break;
    }
}

    // Create iterator variable 'i' to track if a dropdown is open and a user clicks outside of it
let dropDownIterator = event => {
    let selectors = ["toolSelector", "toolName", "toolDD", "conversionSelector", "conversion", "conversionDD", "operationSelector", "opValue", "opSelect"]
    let i;
    let x = event.target.id;
    if (selectors.includes(x)) {
            i = 1
    } else {
        i = 0
    }
    return hideDropDown(i);
}

    // take in iterator state and check if drop down is open for each of the 3 dropdown divs. if it is open and user clicks outside, close the div
let hideDropDown =  i => {
    const toolDropDownOpen = !document.getElementById('toolDropDown').classList.contains('hidden');
    const converterDropDownOpen = !document.getElementById('converterDropDown').classList.contains('hidden');
    const opDropDownOpen = !document.getElementById('opDropDown').classList.contains('hidden');
    if (i == 0 && toolDropDownOpen) {
        document.getElementById('toolDropDown').classList.add('hidden');
    } else if (i == 0 && converterDropDownOpen) {
        document.getElementById('converterDropDown').classList.add('hidden');
    } else if (i == 0 && opDropDownOpen) {
        document.getElementById('opDropDown').classList.add('hidden');
    }
    return;
}

//MEASUREMENT CONVERSION ELEMENTS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // constantly grab user input for math functions
// function userInput () {
//     let measurement = '';
//     if (conversionSelector === "mm to inches" || conversionSelector === 'inches to mm - Decimal') {
//         userEntry.setAttribute('type', 'number');
//         measurement = math.number(userEntry.value);
//         convert(measurement);

//     } else if (conversionSelector === "inches to mm - Fractional") {
//         userEntry.setAttribute('type', 'text');
//         userString = userEntry.value;
//         measurement = math.fraction(userString);
//         measurement = math.number(measurement);
//         console.log(measurement);
//         convert(measurement);
//     }
// }

function userInput() {
    let measurement = '';
    let userString = userEntry.value;
    if (userString.includes('/')) {
        measurement = math.fraction(userString);
        measurement = math.number(measurement);
    } else {
        measurement = math.number(userString);
    }
    return convert(measurement, userString);
}

    // Remove user input and reset output values to original display
function refresh() {
    userEntry.value = '';
    decInch.innerHTML = "Conversion";
    decInchUp.innerHTML = "+1";
    decInchDown.innerHTML = "-1";
    decMM.innerHTML = "Conversion";
    decMMUp.innerHTML = "+1";
    decMMDown.innerHTML = "-1";
    fracInch.innerHTML = "Conversion";
    fracInchUp.innerHTML = "+1/16";
    fracInchDown.innerHTML = "-1/16";
}
    //Change header text of conversion and placeholder based on which option is chosen
function convChange () {
        conversionSelector = event.target.innerHTML;
        conversion.innerHTML = conversionSelector;
        switch (conversionSelector) {
            case 'mm to inches':
                userEntry.setAttribute('placeholder', 'Enter decimal mm value');
                break;
            case 'inches to mm - Decimal':
                userEntry.setAttribute('placeholder', 'Enter decimal inch value');
                break;
            case 'inches to mm - Fractional':
                userEntry.setAttribute('placeholder', 'Enter fractional inch value');
                break;
        }
        document.getElementById('converterDropDown').classList.add('hidden');
}

    //Conversion between mm to inches and vice versa in both decimal and fractional
function convert(measurement, userString) {
        //declare local variables to keep them from becoming globals
    let oneUp, oneDown, answer, answerUp, answerDown, fracUpCalc, fracDownCalc = '';
    // let fracValue, fracAnswer, decimalNum, decValue, wholeNum, fracNum, fracWrite = '';
    switch (conversionSelector) {
        case "mm to inches":
            if (userString.includes('/')) {
                alert('Please enter decimal values only');
                refresh();
                break;
            } else {
                oneUp = (measurement + 1);
                oneDown = (measurement - 1);
                answer = measurement * 0.0393701;
                answerUp = oneUp * 0.0393701;
                answerDown = oneDown * 0.0393701;
                decMM.innerHTML = measurement;
                decMMUp.innerHTML = oneUp;
                decMMDown.innerHTML = oneDown;
                decInch.innerHTML = +answer.toFixed(2);
                decInchUp.innerHTML = +answerUp.toFixed(2);
                decInchDown.innerHTML = +answerDown.toFixed(2);
                fracConvert(answer, fracInch);
                fracConvert(answerUp, fracInchUp);
                fracConvert(answerDown, fracInchDown);
                break;
            }
        case "inches to mm - Decimal":
            if (userString.includes('/')) {
                alert('Please enter decimal values only');
                refresh();
                break;
            } else {
                oneUp = (measurement + .0625);
                oneDown = (measurement -  .0625);
                answer = measurement / .0393701;
                answerUp = oneUp / .0393701;
                answerDown = oneDown / .0393701;
                decMM.innerHTML = +answer.toFixed(2);
                decMMUp.innerHTML = +answerUp.toFixed(2);
                decMMDown.innerHTML = +answerDown.toFixed(2);
                decInchUp.innerHTML = +oneUp.toFixed(2);
                decInchDown.innerHTML = +oneDown.toFixed(2);
                decInch.innerHTML = measurement;
                fracConvert(measurement, fracInch);
                fracConvert(oneUp, fracInchUp);
                fracConvert(oneDown, fracInchDown);
                break;
            }
        case "inches to mm - Fractional":  
            if (userString.includes('.')) {
                alert('Please enter fractional values only');
                refresh();
                break;
            } else {
                oneUp = (measurement + 0.0625);
                oneDown = (measurement -  0.0625);           
                answer = measurement / 0.0393701;
                answerUp = oneUp / 0.0393701;
                answerDown = oneDown / 0.0393701;
                decMM.innerHTML = +answer.toFixed(2);
                decMMUp.innerHTML = +answerUp.toFixed(2);
                decMMDown.innerHTML = +answerDown.toFixed(2);
                decInchUp.innerHTML = +oneUp.toFixed(2);
                decInchDown.innerHTML = +oneDown.toFixed(2);
                decInch.innerHTML = measurement;
                fracInch.innerHTML = userString;
                fracUpCalc = math.fraction(math.add(math.fraction(userString), 0.0625));
                fracMix(fracUpCalc, fracInchUp);
                fracDownCalc = math.fraction(math.subtract(math.fraction(userString), 0.0625));
                fracMix(fracDownCalc, fracInchDown);
                break;
            }
    }
    
}


    //Display decimal remainders as fractions in 16ths of an inch as well as converting to the lowest common denominator of the fraction
// Declare local variables to keep them from becoming globals, write parameters to new variables for better readability
let fracConvert = (value, element) => {
    let decimalNum = value;
    let decValue = decimalNum - Math.floor(decimalNum);
    let wholeNum = Math.floor(decimalNum);
    let fracNum = Math.round(decValue * 16);
    
    if (fracNum == 16) {
        fracNum = ``;
    } else if (fracNum > 0 && fracNum % 8 == 0) {
        fracNum = `1/2`;
    } else if (fracNum > 0 && fracNum % 4 == 0) {
        fracNum = `${fracNum / 4}/4`;
    } else if (fracNum > 0 && fracNum % 2 == 0) {
        fracNum = `${fracNum / 2}/8`;
    } else {
        fracNum = `${fracNum}/16`;
    }

    if (wholeNum > 0) {
        element.innerHTML = `${wholeNum} ${fracNum}`;
    } else { 
        element.innerHTML = `${fracNum}`;
    }
    return;
}

    //Convert improper fractions in inches to mm - Fractional to mixed numbers
// USE ONLY OBJECTS FROM THE MATH.FRACTION() AS INPUT
function fracMix(fracCalc, element) {
    if (fracCalc.n > fracCalc.d) {
        wholeNum = Math.floor(fracCalc.n / fracCalc.d);
        fracNum = fracCalc.n % fracCalc.d;
        element.innerHTML = `${wholeNum} ${fracNum}/${fracCalc.d}`;
    } else {
        element.innerHTML = `${fracCalc.n}/${fracCalc.d}`;
    }
}

// Fractional Calculator Elements
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Change Math operator in opValue 
function opChange () {
    opValue.innerHTML = event.target.innerHTML;
    document.getElementById('opDropDown').classList.add('hidden');
}
    //  Grab values from both calc inputs
function calcInput1 (){
    let calcVerify1 = calcIn1.value;
    if (calcVerify1.includes('/')) {
        calcValue1 = calcIn1.value;
        calcValue1 = math.fraction(calcValue1);
        calcValue1 = math.number(calcValue1);
        calcReady();   
    } else if (calcVerify1.includes('.')) {
        calcValue1 = calcIn1.value;
        calcValue1 = math.number(calcValue1);
        calcReady(); 
    } else {
        calcValue1 = calcIn1.value;
        calcReady(); 
    }
}

function calcInput2 (){
    let calcVerify2 = calcIn2.value;
    if (calcVerify2.includes('/')) {
        calcValue2 = calcIn2.value;
        calcValue2 = math.fraction(calcValue2);
        calcValue2 = math.number(calcValue2);
        calcReady(); 
    } else if (calcVerify2.includes('.')) {
        calcValue2 = calcIn2.value;
        calcValue2 = math.number(calcValue2);
        calcReady(); 
    } else {
        calcValue2 = calcIn2.value;
        calcReady(); 
    }
}
    // check if both inputs have values
function calcReady() {
    if (calcValue1 > 0 && calcValue2 > 0) {
        calculate();
    }
}
        // Clear calculator inputs
function clearIn1() {
    document.getElementById('calcIn1').value = '';
    calcDec.innerHTML = 'Decimal Result';
    calcFrac.innerHTML = 'Fractional Result';
}
    
function clearIn2() {
    document.getElementById('calcIn2').value = '';
    calcDec.innerHTML = 'Decimal Result';
    calcFrac.innerHTML = 'Fractional Result';
}
    // Calculator Function
function calculate() {
    let calcResult = '';
    switch (opValue.innerHTML) {
        case ('+'):
            calcResult = math.number(math.number(calcValue1) + math.number(calcValue2));
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
        case ('-'):
            calcResult = math.number(calcValue1 - calcValue2);
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
        case ('X'):
            calcResult = math.number(calcValue1 * calcValue2);
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
        case ('%'):
            calcResult = math.number(calcValue1 / calcValue2);
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
    }
}
    // Convert calcResult to a fraction (x/16)
function calcFracConvert(calcResult) {
    calcDecimal = calcResult - Math.floor(calcResult);
    calcWhole = Math.floor(calcResult);
    calcFraction = Math.round(calcDecimal * 16);

    if (calcFraction > 16) {
        calcFractionWhole = calcFraction / 16;
        calcFractionNumerator = calcFraction % 16;
    } else calcFractionNumerator = calcFraction;

    calcCheckLCD();
    
    if (calcWhole > 0) {
        calcFracWrite = calcWhole + ' ' + calcFractionWrite;
    } else {
        calcFracWrite = calcFractionWrite;
    }
    calcWrite ();
}

    // return lowest common denominator of calc result
function calcCheckLCD() {
    if (calcFractionNumerator == 16) {
        calcFractionWrite = '';
    } else if (calcFractionNumerator > 0 && calcFractionNumerator % 8 == 0) {
        calcFractionWrite = '1/2';
    } else if (calcFractionNumerator > 0 && calcFractionNumerator % 4 == 0) {
        calcFractionNumerator = calcFractionNumerator / 4;
        calcFractionWrite = calcFractionNumerator.toString() + '/4';
    } else if (calcFractionNumerator > 0 && calcFractionNumerator % 2 == 0) {
        calcFractionNumerator = calcFractionNumerator / 2;
        calcFractionWrite = calcFractionNumerator.toString() + '/2';
    } else if (calcFractionNumerator > 0) {
        calcFractionWrite = calcFractionNumerator.toString() + '/16';
    } else calcFractionWrite = '';
}

function calcWrite() {
    calcFrac.innerHTML = calcFracWrite;
}

// Reference Manual Elements

    // Change active reference chart
function refChange(a) {
    // a will be the index positon of the page to be shown
    refPages.forEach(refPage => refPage.classList.add('hidden'));
    refPages[a].classList.remove('hidden');
    backButton.classList.remove('hidden');
    switch (a) {
        case 3:
            toolName.innerHTML = 'Tap and Die Chart';
            break;
        case 4:
            toolName.innerHTML = 'Wrench Size Chart';
            break;
        case 5:
            toolName.innerHTML = 'Drill Bit Size Chart';
            break;
        case 6:
            toolName.innerHTML = 'User Added Reference Chart';
    }
}
    // Ref Charts Back button
function goBack () {
    backButton.classList.add('hidden');
    refPages.forEach(refPage => refPage.classList.add('hidden'));
    refPages[2].classList.remove('hidden');
    toolName.innerHTML = 'Reference Manuals';
}











