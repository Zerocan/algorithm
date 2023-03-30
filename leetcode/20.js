/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);
  const stack = [];
  for (let char of s) {
    if (map.has(char)) {
      if (stack[stack.length - 1] !== map.get(char)) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
