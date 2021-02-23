"use strict";

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }

// showThis(1, 2);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	},
// };

// obj.sum();

// function sayName() {
// 	console.log(this);
// 	console.log(this.name);
// }

// const user = {
// 	name: "Jhon",
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind.

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	e.target.style.backgroundColor = "red";
});

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		};
		say();
	},
};

obj.sayNumber();

const double = (a) => a * 2;
