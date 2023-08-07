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

console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));

// 暴力解法
var trap1 = function (height) {
  const len = height.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    // 第一个柱子和最后一个柱子不接雨水
    if (i == 0 || i == len - 1) continue;

    let rightHeight = height[i];
    let leftHeight = height[i];

    for (let r = i + 1; r < len; r++) {
      if (height[r] > rightHeight) rightHeight = height[r];
    }
    for (let l = i - 1; l >= 0; l--) {
      if (height[l] > leftHeight) leftHeight = height[l];
    }

    const minHeight = Math.min(rightHeight, leftHeight);
    sum += minHeight - height[i];
  }

  return sum;
};

console.log(trap1([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));
