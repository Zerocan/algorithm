/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
var maxProfit = function (prices) {
  let prev = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    const diff = curr - prev;
    if (diff > 0) {
      res += diff;
    }
    prev = curr;
  }

  return res;
};

// 动态规划
var maxProfit1 = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill().map(() => new Array(2).fill(0));
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return dp[len - 1][1];
};

console.log(maxProfit1([1,2,3,4,5]));
