"use strict";

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, "Hi", "red");
div.showMyProps();
console.log(div.calcArea());

// const squire = new Reactangle(10, 10);
// const long = new Reactangle(10, 100);

// console.log(squire.calcArea());
// console.log(long.calcArea());
