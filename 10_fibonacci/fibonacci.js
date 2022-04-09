const fibonacci = function (input) {
  const num = parseInt(input);
  if (num === 1) return 1;
  else if (num < 0) return "OOPS";
  let leftNum = 0;
  let rightNum = 1;
  let nextNum = 0;
  for (let index = 0; index < num - 1; index++) {
    nextNum = leftNum + rightNum;
    leftNum = rightNum;
    rightNum = nextNum;
  }
  return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
