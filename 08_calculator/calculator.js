const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((sum, current) => sum + current, 0);
};

const multiply = function (numArray) {
  return numArray.reduce((product, current) => product * current);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }

  let finalNum = num * factorial(num - 1);
  return finalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
