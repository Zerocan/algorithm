/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  const path = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  const backTracking = (row) => {
    if (row === n) {
      res.push(transformPath(path));
      return;
    }

    for (let i = 0; i < n; i++) {
      // row 当前行 i 当前列 path 棋盘数据
      if (!isValid(row, i, path, n)) {
        continue;
      }
      path[row][i] = 'Q';
      backTracking(row + 1);
      path[row][i] = '.';
    }
  };

  backTracking(0);
  return res;
};

// 校验是否合法 col表示当前要校验的那行所放的位置
function isValid(row, col, path, n) {

  // 检查列
  for (let i = 0; i < row; i++) {
    if (path[i][col] === 'Q') {
      return false;
    }
  }

  // 检查135度对角线
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (path[i][j] === 'Q') {
      return false;
    }
  }

  // 检查45度对角线
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (path[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

function transformPath(path) {
  const res = [];
  for (let i = 0; i < path.length; i++) {
    res.push(path[i].join(''));
  }

  return res;
}

console.log(solveNQueens(4))
