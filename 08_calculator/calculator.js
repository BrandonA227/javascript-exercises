const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (!arr.length) return 0;
  return arr.reduce((total, ele) => total + ele);
};

const multiply = function (arr) {
  return arr.reduce((total, ele) => total * ele);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
