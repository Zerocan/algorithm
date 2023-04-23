/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  // 排列
  for (let j = 1; j <= target; j++) { // 先背包
    for (let i = 0; i < nums.length; i++) { // 后物品
      if (j >= nums[i]) {
        dp[j] += dp[j - nums[i]];
      }
    }
  }

  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
