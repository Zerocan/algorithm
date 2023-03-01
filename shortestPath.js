/**
 * 假设我们有一个 n 乘以 n 的矩阵 w[n][n]。矩阵存储的都是正整数。
 * 棋子起始位置在左上角，终止位置在右下角。我们将棋子从左上角移动到右下角。
 * 每次只能向右或者向下移动一位。从左上角到右下角，会有很多不同的路径可以走。
 * 我们把每条路径经过的数字加起来看作路径的长度。那从左上角移动到右下角的最短路径长度是多少呢？
 */

/**
 * 回溯算法
 * @param {*} maxtrix 
 * @returns 
 */
const shortesPath = (maxtrix) => {
  const n = maxtrix.length;
  let minPath = Infinity;
  
  const backTracking = (i, j, pathLength) => {
    if (i === n - 1 && j === i - 1) {
      minPath = Math.min(minPath, pathLength + maxtrix[i][j]);
      return;
    }

    if (i < n - 1) {
      backTracking(i + 1, j, pathLength + maxtrix[i][j]);
    }

    if (j < n - 1) {
      backTracking(i, j + 1, pathLength + maxtrix[i][j]);
    }
  };

  backTracking(0, 0, 0);
  return minPath;
};

// Example usage:
const matrix = [
  [1, 3, 5, 9],
  [2, 1, 3, 4],
  [5, 2, 6, 7],
  [6, 8, 4, 3]
];

// 动态规划
const shortesPath1 = (matrix) => {
  const n = matrix.length;
  // 初始化dp数组
  const dp = new Array(n).fill().map(() => new Array(n).fill(Infinity));
  dp[0][0] = matrix[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + matrix[0][i];
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }

  for (let i = 1; i <  n; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + matrix[i][j];
    }
  }

  return dp[n-1][n-1];
};

console.log(shortesPath1(matrix));

// 递归求解
const shortesPath2 = (matrix) => {
  const n = matrix.length;

  const findShortesPath = (i, j) => {
    if (i === n - 1 && j === n - 1) {
      return matrix[i][j];
    } else if (i === n - 1) {
      return findShortesPath(i, j + 1) + matrix[i][j];
    } else if (j === n - 1) {
      return findShortesPath(i + 1, j) + matrix[i][j];
    } else {
      const right = findShortesPath(i, j + 1);
      const down = findShortesPath(i + 1, j);
      return Math.min(right, down) + matrix[i][j];
    }
  }

  return findShortesPath(0, 0);
}

console.log(shortesPath2(matrix));