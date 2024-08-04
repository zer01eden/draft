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

// repeat loops for - break & continue

var numbers = [1, 2, 3, 4, 5];

for (var x = 0; x < numbers.length; x++) {
	console.log(`1: start of iteration no.: ${x}`);
	console.log(numbers[x]);
}

for (var y = 0; y < numbers.length; y++) {
	console.log(`2: start of iteration no.: ${y}`);
	if (numbers[y] < 3) {
		console.log(numbers[y]);
	}
}

for (var z = 0; z < numbers.length; z++) {
	console.log(`3: start of iteration no.: ${z}`);
	if (numbers[z] < 3) {
		console.log(numbers[z]);
	} else {
		break;
	}
}

for (var xx = 0; xx < numbers.length; xx++) {
	console.log(`4: start of iteration no.: ${xx}`);
	if (numbers[xx] % 2 !== 0) {
		console.log(numbers[xx]);
	}
}

for (var yy = 0; yy < numbers.length; yy++) {
	console.log(`5: start of iteration no.: ${yy}`);
	if (numbers[yy] % 2 === 0) {
		continue;
	}
	console.log(numbers[yy]);
}
