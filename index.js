'use strict';

var sum = function (a, b) {
	return a + b;

};

var digits = {
	0: "efes",
	1: "ahat",
	2: "shtaim",
	3: "shalosh",
	4: "arba",
	5: "hamesh",
	6: "shesh",
	7: "sheva",
	8: "shmone",
	9: "tesha"
};

var tens = {
	1: "eser",
	2: "esrim",
	3: "shloshim",
	4: "arbaim",
	5: "hameshim",
	6: "shishim",
	7: "shevim",
	8: "shmonim",
	9: "teshim"
}

var numberToText = function (num) {
	var array = num.toString().split('')
	for (var i = 0; i < array.length; i++) {
		array[i] = parseInt(array[i]);
	};

	if (array.length == 1) {
		return digits[array[0]]
	} else if (array.length == 2) {
		return tensToText(array[0],array[1])
	};

};

var tensToText = function (ten, digit) {
	
	if (digit == 0) { //tens precise
		return tens[ten];
	} else if (ten == 1) { //ten case
		return digits[digit] + " esre";
	} else {
		return tens[ten] + " ve " + digits[digit];
	}
}


exports.sum = sum;
exports.numberToText = numberToText;

