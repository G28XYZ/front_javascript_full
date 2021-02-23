"use strict";

const persone = {
	name: "alex",
	age: 25,

	get userAge() {
		return this.age;
	},

	set userAge(num) {
		this.age = num;
	},
};

console.log((persone.userAge = 26));
console.log(persone.userAge);
