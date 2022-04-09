const palindromes = function (str) {
  const strOnlyAlpha = str.toLowerCase().replace(/[^a-z]/g, "");
  let isPalindrome = true;
  for (let index = 0; index < Math.floor(strOnlyAlpha.length / 2); index++) {
    if (strOnlyAlpha[index] !== strOnlyAlpha[strOnlyAlpha.length - index - 1]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
