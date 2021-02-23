"use strict";

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = "Kucher";

	say() {
		console.log(`Name: ${this.name} ${this.#surname}, years: ${this._age}`);
	}

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === "number" && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log("not valid value");
		}
	}
}

const ivan = new User("Ivan", 27);

// console.log(ivan.#surname);
ivan.age = 99;
console.log(ivan.age);

ivan.say();
