/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
var maxSubArray = function (nums) {
  let max = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > max) {
      max = count;
    }
    // 连续和为负数，将count置为0，抛弃前面所有的，重新开始
    if (count < 0) {
      count = 0;
    }
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
