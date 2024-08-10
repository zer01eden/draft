//closures

'use strict';

function makeAdd(a) {
	return function (b) {
		return a + b;
	};
}

var add10 = makeAdd(10);

console.log(add10(1)); //11
console.log(add10(69)); //79
console.log(add10(656)); //666
console.log(add10(-17)); //-7
console.log(add10(-10)); //0

console.log('--------------');
//hoisting

// 1:

//variables are dclared first
//before code execution
//so it will have undefined value

console.log(a);

var a = 1;

// 2:
// function declarations are hoisted whole
// so it works before declarations in code

console.log(add(1, 4));

function add(a, b) {
	return a + b;
}

// 3:
// functions expressions beheve like
// normal variables declarations
// so it will have undifaned value
// and trow error because you cannot call undefined

console.log(addExpresion(1, 6));

var addExpresion = function (a, b) {
	return a + b;
};
