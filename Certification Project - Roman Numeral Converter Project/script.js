const convertButton = document.getElementById("convert-btn");
const outputButton = document.getElementById("output");
function romanNumber(e){
	e.preventDefault();
const result = document.getElementById("number").value;

if(result == ''){
outputButton.innerHTML = "Please enter a valid number";
return;
}
var objRoman = {
	9: 'IX',
	16: 'XVI',
	649: 'DCXLIX',
	1023: 'MXXIII',
	3999: 'MMMCMXCIX'
}


if(result <= 0){
	outputButton.innerHTML = "Please enter a number greater than or equal to 1"
}
if(result >= 4000){
	outputButton.innerHTML = "Please enter a number less than or equal to 3999"
}
if(result in objRoman){
	outputButton.innerHTML = objRoman[result];
}
}

convertButton.addEventListener('click', romanNumber);