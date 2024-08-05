// repeat switch.

'use strict';

var num1 = 1;
var num2 = 2;
var operator = prompt('add type operator: +, -, *, /')

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

function showAlert(){
    alert('Wrong operator');
}

var result = 0;

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
        showAlert();
}

console.log(result);
