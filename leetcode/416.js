/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return false;
  const dp = new Array(sum / 2 + 1).fill(0);
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  if (dp[sum / 2] === sum / 2) return true;
  return false;
};

console.log(canPartition([1,5,11,5]));