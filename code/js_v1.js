"use strict";

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
}

User.prototype.exit = function (name) {
	console.log(`user ${this.name} is out`);
};

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 29);

ivan.exit();
