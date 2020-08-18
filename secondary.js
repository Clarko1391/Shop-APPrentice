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

document.getElementById('toolDD').addEventListener('click', function() {toolMenu()});

 // Show/hide Tool Selection Menu by toggling 'hidden' class
 function toolMenu (){
    document.getElementById('toolDropDown').classList.toggle('hidden');
}

//Change header text of ToolSelector based on which option is chosen
function toolChange () {
    toolName.innerHTML = event.target.innerHTML;
    document.getElementById('toolDropDown').classList.add('hidden');
    // use an if statement to link HTML page to each individual heading as a function
}