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
