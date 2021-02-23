"use strict";

// filter

const names = ["ivan", "Ann", "Ksenia", "Voldemart"];

const shortName = names.filter(function (name) {
	return name.length < 5;
});

// map

let answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map((item) => item.toLowerCase());
// answers = answers.map((item) => item.toLowerCase());

// every/some

const some = [4, "qwq", "sfreferf"];

// если хотя бы один элемент удовлетворяет условию в колбак функции вернёт true
console.log(some.some((item) => typeof item == "number"));

// если все элементы удовлетворяют условию в колбак функции вернёт true
console.log(some.every((item) => typeof item == "number"));

// reduce
// перебирает весь масив с сохранением предыдущего результата
// третье значение это элемент с которого начнётся перебор

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3);

const arr2 = ["apple", "pear", "plum"];

const res = arr2.reduce((sum, current) => `${sum}, ${current}`);

// entries - преобразует объект в масив. Масив можно перебрать по цепочке

const obj = {
	ivan: "persone",
	ann: "persone",
	dog: "animal",
	cat: "animal",
};

const newArr = Object.entries(obj)
	.filter((item) => item[1] == "persone")
	.map((item) => item[0]);
