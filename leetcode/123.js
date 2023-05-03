/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill().map(() => new Array(4).fill(0));
  dp[0] = [-prices[0], 0, -prices[0], 0]; // 一开始的思路dp[0][2]初始化错误
  for(let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
    dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] - prices[i]);
    dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] + prices[i]);
  }
  
  return dp[len-1][3];
};

maxProfit( [1,4,2] )