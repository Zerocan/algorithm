/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  // 组合
  for (let i = 0; i < coins.length; i++) { // 先物品
    for (let j = coins[i]; j <= amount; j++) { // 后背包
      dp[j] += dp[j-coins[i]];
    }
  }

  return dp[amount];
};

console.log(change(3, [2]));