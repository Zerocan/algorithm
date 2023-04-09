/**
 * @param {string} digits
 * @return {string[]}
 */
const numberToChars = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};
var letterCombinations = function(digits) {
  const numberArr = Array.from(digits);
  const len = numberArr.length;
  if (len === 0) {
    return [];
  }
  const res = [];
  let digit = [];
  const backtracking = (index) => {
    if (digit.length === len) {
      res.push([...digit].join(''));
      return;
    }

    const currChars = numberToChars[numberArr[index]];
    for (let i = 0; i < currChars.length; i++) {
      digit.push(currChars[i]);
      backtracking(index + 1);
      digit.pop();
    }
  }

  backtracking(0);
  return res;
};

console.log(letterCombinations('23'));
