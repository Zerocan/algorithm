// leetcode 51.N皇后 回溯

/**
 * @param {*} row 当前行
 * @param {*} col 当前列
 * @param {*} chessBoard 当前棋盘
 * @param {*} n 棋盘大小
 */
// 校验是否合法
function isValid(row, col, chessBoard, n) {
  // 检查列
  for(let i = 0; i < row; i ++) {
    if (chessBoard[i][col] === 'Q') {
      return false;
    }
  }

  // 检查45度对角线
  for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === 'Q') {
      return false;
    }
  }

  // 检查135度对角线
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

// 转换为对应的二维数组输出
function transformChessBoard(chessBoard) {
  let chessBoardBack = [];
  chessBoard.forEach(row => {
    let rowStr = '';
    row.forEach(value => {
      rowStr += value;
    })
    chessBoardBack.push(rowStr);
  })

  return chessBoardBack;
}

function backTracking(row, chessBoard, n, result) {
  // 终止条件
  if (row === n) {
    result.push(transformChessBoard(chessBoard));
    return;
  }
  for(let col = 0; col < n; col++) {
    if (isValid(row, col, chessBoard, n)) {
      chessBoard[row][col] = 'Q';
      backTracking(row + 1, chessBoard, n, result);
      chessBoard[row][col] = '.';
    }
  }
}

function sloveNQueens(n) {
  let result = [];
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  backTracking(0, chessBoard, n, result);
  return result;
};

console.log(sloveNQueens(4));