/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
var maxProfit = function(prices) {
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