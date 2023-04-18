/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;
  const dp = new Array(rowLen).fill().map(() => new Array(colLen).fill(0));

  let flag = true; // 标志前一个节点是否有障碍物 true表示无障碍物
  for (let i = 0; i < colLen; i++) {
    let cur = 1;
    if (obstacleGrid[0][i] === 1 || !flag) {
      flag = false;
      cur = 0;
    }
    dp[0][i] = cur;
  }

  flag = !(obstacleGrid[0][0] === 1);
  for (let i = 1; i < rowLen; i++) {
    let cur = 1;
    if (obstacleGrid[i][0] === 1 || !flag) {
      flag = false;
      cur = 0;
    }
    dp[i][0] = cur;
  }

  for (let row = 1; row < rowLen; row++) {
    for (let col = 1; col < colLen; col++) {
      const cur = obstacleGrid[row][col];
      if (cur === 1) {
        dp[row][col] = 0;
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
    }
  }

  return dp[rowLen - 1][colLen - 1];
};

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);

// 优化
var uniquePathsWithObstacles1 = function (obstacleGrid) {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;
  const dp = new Array(rowLen).fill().map(() => new Array(colLen).fill(0));

  for (let i = 0; i < rowLen && obstacleGrid[i][0] === 0; ++i) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < colLen && obstacleGrid[0][i] === 0; ++i) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < rowLen; ++i) {
    for (let j = 1; j < colLen; ++j) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  console.log(dp[rowLen - 1][colLen - 1])
  return dp[rowLen - 1][colLen - 1];
};

uniquePathsWithObstacles1([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
