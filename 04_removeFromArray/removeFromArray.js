const removeFromArray = function (...args) {
  return args[0].filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
