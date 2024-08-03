//repeat loops - for

'use script';

var endIncrement = 6;

for (var i = 0; i < endIncrement; i++) {
	console.log(i);
}

console.log('------------');

var endDecrement = 0;

for (var j = 6; j > endDecrement; j--) {
	console.log(j);
}

// repeat loop for (arrays)
var users = ['zero', 'one', 'two', 'tree'];
var nums = [0, 1, 2, 3];

for (var k = 0; k < users.length; k++) {
	console.log(users[k]);
}

var sum = 0;
for (var l = 0; l < nums.length; l++) {
	sum = sum + nums[l];
}
console.log(`All sumnum is: ${sum}`);
