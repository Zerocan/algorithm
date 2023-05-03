/**
 * @param {number[]} prices
 * @return {number}
 */
// 超时
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const cur = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - cur > max) {
        max = prices[j] - cur;
      }
    }
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 贪心算法
var maxProfit1 = function (prices) {
  let low = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    res = Math.max(res, prices[i] - low);
  }

  return res;
};

console.log(maxProfit1([7, 1, 5, 3, 6, 4]));

// 动态规划
var maxProfit2 = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill([0, 0]);
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
  }
  return dp[len - 1][1];
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
