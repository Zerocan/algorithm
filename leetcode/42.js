/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  if (len === 0) return [];
  let res = 0;
  let stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const middle = stack.pop();
      if (stack.length !== 0) {
        const left = stack[stack.length - 1];
        const minHeight = Math.min(height[i], height[left]);
        const diff = minHeight - height[middle];
        res += diff * (i - left - 1);
      }
    }
    stack.push(i);
  }

  return res;
};

console.log(trap([5,5,1,7,1,1,5,2,7,6]));
