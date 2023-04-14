/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 自己的思路
var largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let splitIndex = 0; // 第一个不为负数的下标
  for (let i = 0; i < nums.length; i++) {
    splitIndex = i;
    if (nums[i] >= 0) {
      break;
    }
  }
  if (k <= splitIndex) {
    for (let i = 0; i < k; i++) {
      nums[i] = -nums[i];
    }
  } else {
    const diff = k - splitIndex;
    for (let i = 0; i < splitIndex; i++) {
      nums[i] = -nums[i];
    }
    if (diff % 2 === 1) {
      if (splitIndex - 1 >= 0 && nums[splitIndex - 1] < nums[splitIndex]) {
        nums[splitIndex - 1] = -nums[splitIndex - 1];
      } else {
        nums[splitIndex] = -nums[splitIndex];
      }
    }
  }

  return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));

// 代码随想录
var largestSumAfterKNegations1 = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  // 若k还大于0
  while (k > 0) {
    nums[nums.length - 1] = -nums[nums.length - 1];
    k--;
  }

  return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations1([2, -3, -1, 5, -4], 2));

// 基于自己的思路进行优化(一次遍历)
var largestSumAfterKNegations2 = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }

    sum += nums[i];
  }

  if (k % 2 === 1) {
    sum -= 2 * nums[nums.length - 1];
  }

  return sum;
};

console.log(largestSumAfterKNegations2([2, -3, -1, 5, -4], 2));
