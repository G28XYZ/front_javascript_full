"use strict";

// new RegExp("pattern", "flags");

// /pattern/f

// const ans = prompt("Введите ваше имя ");

// const reg = /\d/g;
// i
// m
// g

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));

// console.log(ans.match(reg));

// \d - все числа
// \w - все слова
// \s - все пробелы

const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i));
