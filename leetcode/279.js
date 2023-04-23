/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const max = Math.floor(Math.sqrt(n));
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 1; i <= max; i++) {
    const square = Math.pow(i, 2);
    for (let j = square; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - square] + 1);
    }
  }

  return dp[n];
};

console.log(numSquares(1));
