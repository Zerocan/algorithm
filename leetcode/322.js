/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let j = 1; j <= amount; j++) {
    for (let i = 0; i < coins.length; i++) {
      if (j >= coins[i]) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 5));
