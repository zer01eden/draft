// repeat switch.

'use strict';

var num1 = Number(prompt('add first number:', 'only number'));
var num2 = Number(prompt('add second number:', 'only number'));
var operator = prompt(
	`add type operator: +, -, *, /, for your numbers ${num1} & ${num2}`
);

function add(a, b) {
	return a + b;
}
function substract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

function showError() {
	alert('Wrong operator');
}

function showResult(result) {
	alert(`Result is ${result}`);
}

function displayInfo(error, result) {
	if (error) {
		showError();
	} else {
		showResult(result);
	}
}

var result = 0;
var error = false;

switch (operator) {
	case '+':
		result = add(num1, num2);
		break;
	case '-':
		result = substract(num1, num2);
		break;
	case '*':
		result = multiply(num1, num2);
		break;
	case '/':
		result = divide(num1, num2);
		break;
	default:
		error = true;
}

displayInfo(error, result);
