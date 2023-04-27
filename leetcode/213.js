/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己的思路，没通过
var rob = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];

  const dp = new Array(len).fill().map(() => [0, false]);
  let lastFalseIndex = -Infinity;
  dp[0] = [nums[0], true];
  if (nums[1] >= nums[0]) {
    dp[1] = [nums[1], false];
    if (len > 3) {
      lastFalseIndex = 1;
    }
  } else {
    dp[1] = [nums[0], true];
  }

  for (let i = 2; i < len - 1; i++) {
    const num1 = dp[i - 2][0] + nums[i];
    const num2 = dp[i - 1][0];
    if (num1 > num2) {
      dp[i] = [num1, dp[i - 2][1]];
    } else if (num1 < num2) {
      dp[i] = [num2, dp[i - 1][1]];
    } else {
      dp[i] = [num1, dp[i - 2][1] && dp[i - 1][1]];
    }
    if (dp[i][1] === false && i !== len - 2) {
      lastFalseIndex = i;
    }
  }

  return Math.max(
    dp[len - 2][0],
    lastFalseIndex !== -Infinity
      ? dp[lastFalseIndex][0] + nums[len - 1]
      : nums[len - 1]
  );
};

console.log(rob([2, 3, 2]));

// 分为考虑首元素和不考虑首元素两种情况
var rob1 = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  const result1 = robRange(nums, 0, n - 2);
  const result2 = robRange(nums, 1, n - 1);
  return Math.max(result1, result2);
};

const robRange = (nums, start, end) => {
  if (end === start) return nums[start];
  const dp = Array(nums.length).fill(0);
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[end];
};
