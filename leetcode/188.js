/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const len = k * 2;
  const dp = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      dp[i] = -prices[0];
    }
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        // 第1次持有
        dp[j] = Math.max(dp[j], -prices[i]);
      } else if (j % 2 === 0) {
        // 第2～j / 2 次持有
        dp[j] = Math.max(dp[j], dp[j - 1] - prices[i]);
      } else {
        // 第Math.floor(j / 2)次不持有
        dp[j] = Math.max(dp[j], dp[j - 1] + prices[i]);
      }
    }
  }

  return dp[len - 1];
};

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
