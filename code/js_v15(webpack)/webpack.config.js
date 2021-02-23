"use strict";

let path = require("path");

module.exports = {
	mode: "development", // режим в котором будет работать webpack (всего development and production)
	entry: "./src/js/script.js", // тот файл с которого будем начинать
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist/js",
	}, // конфигурируем файл на выходе который получится после webpack
	watch: true, // отслеживание изменения файлов
	devtool: "source-map", // карта исходных файлов перед сборкой вебпака
	module: {}, // модлули
};
