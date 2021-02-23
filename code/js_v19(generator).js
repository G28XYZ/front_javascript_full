"use strict";

// function* gen() {
// 	yield "S";
// 	yield "c";
// 	yield "r";
// 	yield "i";
// 	yield "p";
// 	yield "t";
// }

// const str = gen();

// console.log(str.next().value);

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

for (let j of count(5)) {
	console.log(j);
}

// const counter = count(5);

// console.log(counter.next());
