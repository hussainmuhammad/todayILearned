var fTemp;
var celciusResult;
var cTemp;
var farenheitResult;
var userInput;

window.prompt("Convert to Celcius or Farenheit?", userInput);

if(userInput = "farenheit") {
    convertToCelcius();
}
else if(userInput = "celcius"){
    convertToFarenheit();
}

function convertToCelcius(){
    fTemp2 = window.prompt("Enter a number");
    ftemp = fTemp2.parseInt();
    celciusResult = ((fTemp - 32) * 5) / 9;
    document.getElementById("convertedTemp").value = celciusResult;
}

function convertToFarenheit() {
    cTemp2 = window.prompt("Enter a number");
    ctemp = cTemp2.parseInt();
    farenheitResult = ((cTemp *9 ) / 5) + 32;
    document.getElementById("convertedTemp").value = farenheitResult;
}
