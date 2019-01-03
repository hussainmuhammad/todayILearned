//This will reverse the phrase a user is prompted to enter.

var phrase = prompt("Enter a phrase");
var strArray = phrase.split(""); /*Indexes string characters*/
strArray.reverse();
document.getElementById("message").innerHTML = strArray.join(""); /*Unindexes array back to a string*/
