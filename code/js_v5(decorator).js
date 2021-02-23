var fac = function f(n) {
	return n !== 1 ? f(n - 1) * n : n;
};

var fib = function fibonacchi(n) {
	return n > 2 ? fibonacchi(n - 1) + fibonacchi(n - 2) : 1;
};

function logResultDecorator(func, funcName) {
	return function () {
		var result = func.apply(this, arguments);
		console.log(`Result function ${funcName}: ${result}`);
		return result;
	};
}

function callCountDecorator(func, funcName) {
	var count = 0;
	return function () {
		count++;
		console.log(`Function ${funcName} was call ${count}`);
		return func.apply(this, arguments);
	};
}

function timeDecorator(func, funcName) {
	return function () {
		var startTime = performance.now(); // or Date.now()

		var result = func.apply(this, arguments);

		var endTime = performance.now() - startTime;

		console.log(`Function went ${endTime.toFixed(2)} ms`);

		return result;
	};
}

function cacheDecorator(func) {
	var cache = {};
	return function (n) {
		// cache[5]
		if (typeof cache[n] === "undefined") {
			cache[n] = func.apply(this, arguments);
		}
		console.log(cache);

		return cache[n];
	};
}

function argumentsCountDecorator(func, requireNumber) {
	return function () {
		var argsCount = arguments.length;

		if (requireNumber !== argsCount) {
			console.warn(`Count args dont match`);
			return;
		}
		return func.apply(this, arguments);
	};
}

fac = logResultDecorator(fac, "factorial");
fac = callCountDecorator(fac, "factorial");
fac = timeDecorator(fac, "factorial");
fac = cacheDecorator(fac);
fac = argumentsCountDecorator(fac, 1);

fib = logResultDecorator(fib, "fibonachi");
fib = callCountDecorator(fib, "fibonachi");
fib = timeDecorator(fib, "fibonachi");
fib = cacheDecorator(fib);
fib = argumentsCountDecorator(fib, 1);
