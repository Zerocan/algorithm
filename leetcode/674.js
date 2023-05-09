/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
var findLengthOfLCIS = function (nums) {
  let max = 1;
  let currLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currLen++;
    } else {
      if (currLen > max) {
        max = currLen;
      }
      currLen = 1;
    }
  }
  if (currLen > max) {
    max = currLen;
  }
  return max;
};

console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));

// 动态规划
var findLengthOfLCIS1 = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return Math.max(...dp);
};

console.log(findLengthOfLCIS1([1,3,5,4,7]));
