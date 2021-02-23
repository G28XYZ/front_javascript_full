"use strict";

(function () {
	let number = 2;
	console.log(number);
})();

const user = (function () {
	const privat = function () {
		console.log("I am privat!");
	};

	return {
		sayHello: privat,
	};
})();

user.sayHello();
