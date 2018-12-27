var fTemp;
var celciusResult;
var cTemp;
var farenheitResult;
var userInput;
var temperature;

window.prompt("Convert to Celcius or Farenheit?", userInput);

if(userInput = "farenheit") {
    convertToFarenheit();
}
else if(userInput = "celcius"){
    convertToCelcius();
}

function convertToCelcius(){
    fTemp = window.prompt("Enter a number", temperature);
    celciusResult = ((fTemp - 32) * 5) / 9;
    document.getElementById("convertedTemp").innerHTML = fTemp + ' degrees Farenheit is converted to ' +
     celciusResult + ' degrees Celcius';
}

function convertToFarenheit() {
    cTemp = window.prompt("Enter a number", temperature);
    farenheitResult = ((cTemp *9 ) / 5) + 32;
    document.getElementById("convertedTemp").innerHTML = cTemp + ' degrees Celcius is converted to ' +
     farenheitResult + ' degrees Farenheit';
}
