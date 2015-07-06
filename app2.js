var numberOne = parseInt(prompt("Enter a number", 10));
var numberTwo = parseInt(prompt("Enter another number", 10));
if (!isNaN(numberOne) && !isNaN(numberTwo)) {
	var addedNumbers = numberOne + numberTwo;
	console.log(addedNumbers);
} else {
	alert("Both numbers need to be integers!");
};
