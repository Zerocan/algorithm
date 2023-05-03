/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill().map(() => new Array(2).fill(0));
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], (i >= 2 ? dp[i - 2][1] : 0) - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  console.log(dp);
  return dp[len - 1][1];
};

maxProfit([1, 2, 3, 0, 2]);
