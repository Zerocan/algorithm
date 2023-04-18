/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const len = cost.length;
  const dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 2],  dp[i - 1]) + cost[i];
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));

// 代码随想录
var minCostClimbingStairs1 = function(cost) {
  const len = cost.length;
  // dp[i] 表示跳到i这个位置的最小花费
  // 往上跳了才花费，不跳不需要，所以dp[0] = 0, dp[1] = 0（可以从0或1出发）
  const dp = [0, 0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2],  dp[i - 1] + cost[i - 1]);
  }
  return dp[len];
};