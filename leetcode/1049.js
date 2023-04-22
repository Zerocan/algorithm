/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const len = stones.length;
  const sum = stones.reduce((a, b) => a + b);
  const max = Math.floor(sum / 2);
  const dp = new Array(len).fill().map(() => new Array(max + 1).fill(0));

  for (let i = 1; i <= max; i++) {
    if (stones[0] <= i) {
      dp[0][i] = stones[0];
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= max; j++) {
      if (stones[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], stones[i] + dp[i - 1][j - stones[i]]);
      }
    }
  }

  return sum - dp[len - 1][max] * 2;
};

console.log(lastStoneWeightII([31,26,33,21,40]));

// 一维数组
var lastStoneWeightII2 = function (stones) {
  const len = stones.length;
  const sum = stones.reduce((a, b) => a + b);
  const max = Math.floor(sum / 2);
  const dp = new Array(max + 1).fill(0);

  for (let i = 0; i < len; i++) {
    for(let j = max; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j-stones[i]] + stones[i]);
    }
  }

  return sum - dp[max] * 2;
};

console.log(lastStoneWeightII2([31,26,33,21,40]));
