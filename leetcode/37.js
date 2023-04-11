/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const len = board.length;
  const backTracking = () => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (board[i][j] !== '.') {
          continue;
        }
        for (let val = 1; val <= 9; val++) {
          if (isValid(`${val}`, i, j, board)) {
            board[i][j] = `${val}`;
            const res = backTracking(board);
            if (res) {
              return true;
            }
            board[i][j] = '.';
          }
        }

        return false;
      }
    }

    return true; // 填充满棋盘，返回true，将其传递到树的根节点，结束递归
  }

  backTracking(board);
  return board;
};


function isValid(val, row, col, board) {
  const len = board.length;
  // 校验当前列
  for (let i = 0; i < len; i++) {
    if (val === board[i][col]) {
      return false;
    }
  }

  // 校验行
  for (let i = 0; i < len; i++) {
    if (val === board[row][i]) {
      return false;
    }
  }

  // 校验九宫格
  let startRow = Math.floor(row / 3) * 3
  let startCol = Math.floor(col / 3) * 3

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === val) {
        return false;
      }
    }
  }

  return true;
}