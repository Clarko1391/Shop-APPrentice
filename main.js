// Selectors & Event Listeners

    //user entry and math variables (for both converter and calculator)
const userEntry = document.getElementById('userEntry');
userEntry.addEventListener('input', userInput);
let measurement,
    fracValue,
    fracAnswer,
    decimalNum,
    decValue,
    wholeNum,
    fracNum,
    fracWrite = '';
////////////////////////////////////////////////////////////////////////
const calcIn1 = document.getElementById('calcIn1');
calcIn1.addEventListener('input', function(){calcInput1()});
const calcIn2 = document.getElementById('calcIn2');
calcIn2.addEventListener('input', function(){calcInput2()});
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
<<<<<<< Updated upstream
const ToolSelector = document.getElementById('toolSelector');
toolSelector.addEventListener('click', function() {toolMenu()});
document.getElementById('conversionSelector').addEventListener('click', function() {converterMenu()});
document.getElementById('opValue').addEventListener('click', function() {opMenu()});

    // Event listener to close dropdown menu if user clicks outside
window.addEventListener('click', function(){hideDropDown()});
let i = 0;
=======
const toolSelector = document.getElementById('toolSelector');
    // toolMenu open
toolSelector.addEventListener('click', function() {document.getElementById('toolDropDown').classList.toggle('hidden')});
    // converterMenu open
document.getElementById('conversionSelector').addEventListener('click', function(){document.getElementById('converterDropDown').classList.toggle('hidden')});
    //opMenu open
document.getElementById('opValue').addEventListener('click', function(){document.getElementById('opDropDown').classList.remove('hidden')});

    // Event listener to close dropdown menu if user clicks outside
window.addEventListener('click', function() {dropDownIterator(event)});
>>>>>>> Stashed changes

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


    // conversionSelector and changers
let conversion = document.getElementById('conversion');
let conversionSelector = document.getElementById('conversion').innerHTML;
const cDD1 = document.getElementById('cDD1');
cDD1.addEventListener('click', function() {convChange()});
const cDD2 = document.getElementById('cDD2');
cDD2.addEventListener('click', function() {convChange()});
const cDD3 = document.getElementById('cDD3');
cDD3.addEventListener('click', function() {convChange()});

    //Operator Selectors and changers
let opValue = document.getElementById('opValue');
const opDD1 = document.getElementById('opDD1');
opDD1.addEventListener('click', function() {opChange()});
const opDD2 = document.getElementById('opDD2');
opDD2.addEventListener('click', function() {opChange()});
const opDD3 = document.getElementById('opDD3');
opDD3.addEventListener('click', function() {opChange()});
const opDD4 = document.getElementById('opDD4');
opDD4.addEventListener('click', function() {opChange()});

    // Calculator input clear
document.getElementById('calcIn1Reset').addEventListener('click', function() {clearIn1()});
document.getElementById('calcIn2Reset').addEventListener('click', function() {clearIn2()});

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
backBtn.addEventListener('click', function(){goBack()});

    // Chart Selectors (clicking on card will bring up chart)
const tCCard = document.getElementById('tCCard');
tCCard.addEventListener('click', function(){refChange(3)});
const wSCard = document.getElementById('wSCard');
wSCard.addEventListener('click', function(){refChange(4)});
const dSCard = document.getElementById('dSCard');
dSCard.addEventListener('click', function(){refChange(5)});
const uACard = document.getElementById('uACard');
uACard.addEventListener('click', function(){refChange(6)});

// Functions

// TOOL SELECTOR ELEMENTS (TOOL MENU ALWAYS DISPLAYED IN APP)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<<<<<<< Updated upstream
    // Show/hide tool selection menu by toggling 'hidden' class
function toolMenu (){
        document.getElementById('toolDropDown').classList.toggle('hidden');
}
    //Change header text of ToolSelector based on which option is chosen
function toolChange () {
        toolName.innerHTML = event.target.innerHTML;
        document.getElementById('toolDropDown').classList.add('hidden');
        switch (toolName.innerHTML) {
            case "Measurement Converter":
                refPages.forEach(refPage => refPage.classList.add('hidden'));
                refPages[0].classList.remove('hidden');
                backButton.classList.add('hidden');
                toolSelector.style['border-radius'] = "4px 4px 0px 0px";
                break;
            case "Fractional Calculator":
                refPages.forEach(refPage => refPage.classList.add('hidden'));
                refPages[1].classList.remove('hidden');
                backButton.classList.add('hidden');
                toolSelector.style['border-radius'] = "4px 4px 4px 4px";
                break;
            case "Reference Manuals":
                refPages.forEach(refPage => refPage.classList.add('hidden'));
                refPages[2].classList.remove('hidden');
                backButton.classList.add('hidden');
                toolSelector.style['border-radius'] = "4px 4px 4px 4px";
                break;
        }
}
    //Hide dropdown menu if user clicks outside of it
function hideDropDown () {
        document.getElementById('toolDD').addEventListener('click', function(){clear()});
        document.getElementById('conversionDD').addEventListener('click', function(){clear()});
        document.getElementById('opDropDown').addEventListener('click', function(){clear()});
        if (i >= 1 && !document.getElementById('toolDropDown').classList.contains('hidden')) {
            document.getElementById('toolDropDown').classList.toggle('hidden');
            i = 0;
        } else if (i >= 1 && !document.getElementById('converterDropDown').classList.contains('hidden')) {
            document.getElementById('converterDropDown').classList.toggle('hidden');
            i = 0;
        } else if (i >= 1 && !document.getElementById('opDropDown').classList.contains('hidden')) {
            document.getElementById('opDropDown').classList.toggle('hidden');
            i = 0;
        } else{
            i++;
        }
    
        function clear () {
            i = 0;
        }    
=======

    //Change header text of ToolSelector based on which option is chosen
function toolChange () {
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
function dropDownIterator(event) {
    let i;
    if ((event.target.id === "toolSelector")
        || (event.target.id === "toolName")
        || (event.target.id === "toolDD")) {
            i = 1
    } else if ((event.target.id === "conversionSelector")
        || (event.target.id === "conversion")
        || (event.target.id === "conversionDD")) {
        i = 1
    } else if ((event.target.id === "operationSelector")
        || (event.target.id === "opValue")
        || (event.target.id === "opSelect")) {
        i = 1
    } else {
        i = 0
    }
    hideDropDown(i);
}

    // take in iterator state and check if drop down is open for each of the 3 dropdown divs. if it is open and user clicks outside, close the div
function hideDropDown (i) {
    i = i;
    console.log(i);
    const toolDropDownOpen = !document.getElementById('toolDropDown').classList.contains('hidden');
    const converterDropDownOpen = !document.getElementById('converterDropDown').classList.contains('hidden');
    const opDropDownOpen = !document.getElementById('opDropDown').classList.contains('hidden');
    if (i == 0 && toolDropDownOpen == true) {
        document.getElementById('toolDropDown').classList.add('hidden');
    } else if (i == 0 && converterDropDownOpen == true) {
        document.getElementById('converterDropDown').classList.add('hidden');
    } else if (i == 0 && opDropDownOpen == true) {
        document.getElementById('opDropDown').classList.add('hidden');
    }

>>>>>>> Stashed changes
}

//MEASUREMENT CONVERSION ELEMENTS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // constantly grab user input for math functions
function userInput (){
    if (conversionSelector === "mm to inches" || conversionSelector === 'inches to mm - Decimal') {
        userEntry.setAttribute('type', 'number');
        measurement = userEntry.value;
        measurement = parseInt(measurement);
        convert(measurement);

    } else if (conversionSelector === "inches to mm - Fractional") {
        userEntry.setAttribute('type', 'text');
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
    decInchUp.innerHTML = "+1";
    decInchDown.innerHTML = "-1";
    decMM.innerHTML = "Conversion";
    decMMUp.innerHTML = "+1";
    decMMDown.innerHTML = "-1";
    fracInch.innerHTML = "Conversion";
    fracInchUp.innerHTML = "+1";
    fracInchDown.innerHTML = "-1";
}
    //Change header text of conversion and placeholder based on which option is chosen
function convChange () {
        conversionSelector = event.target.innerHTML;
        conversion.innerHTML = conversionSelector;
        pHChange();
        document.getElementById('converterDropDown').classList.add('hidden');
}

function pHChange() {
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
            oneUp = (measurement + .0625);
            oneDown = (measurement -  .0625);
            answer = measurement / .0393701;
            answerUp = oneUp / .0393701;
            answerDown = oneDown / .0393701;
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

    //Display decimal remainders as fractions in 16ths of an inch
function fracConvert(decimalNum, fracWrite) {
    decValue = decimalNum - Math.floor(decimalNum);
    wholeNum = Math.floor(decimalNum);
    fracNum = Math.round(decValue * 16);
    convCheckLCD(fracNum);
    if (wholeNum > 0) {
        fracWrite.innerHTML = wholeNum + ' ' + fracNum;
    } else {
        fracWrite.innerHTML = fracNum;
    }
        
}

    // Return Lowest common denominator of conversion calc
function convCheckLCD(fracNumTemp) {
    if (fracNumTemp == 16) {
        fracNum = '';
    } else if (fracNumTemp > 0 && fracNumTemp % 8 == 0) {
        fracNum = '1/2';
        console.log(typeof fracNum);
    } else if (fracNumTemp > 0 && fracNumTemp % 4 == 0) {
        fracNum = (fracNum / 4).toString() + '/4';
    } else if (fracNumTemp > 0 && fracNumTemp % 2 == 0) {
        fracNum = (fracNum / 2).toString() + '/8';
    } else {
        fracNum = fracNum.toString() + '/16';
    }
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

// Fractional Calculator Elements
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Change Math operator in opValue 
function opChange (){
    opSelector = event.target.innerHTML;
    opValue.innerHTML = opSelector;
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
            console.log(calcResult);
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
        case ('X'):
            calcResult = math.number(calcValue1 * calcValue2);
            console.log(calcResult);
            calcDec.innerHTML = +calcResult.toFixed(2);
            calcFracConvert(calcResult);
            break;
        case ('%'):
            calcResult = math.number(calcValue1 / calcValue2);
            console.log(calcResult);
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
    console.log(calcFracWrite)
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











