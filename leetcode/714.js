/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const len = prices.length;
  const dp = new Array(2).fill(0);
  dp[0] = -prices[0] - fee;
  for (let i = 1; i < len; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i] - fee);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }

  return dp[1];
};

console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
