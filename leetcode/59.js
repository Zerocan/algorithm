var generateMatrix = function (n) {
  // new Array(n).fill(new Array(n).fill(0)) // 不注意：能这些写，会引用同一地址
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let num = 1,
    t = 0,
    r = n - 1,
    b = n - 1,
    l = 0;
  while (num <= n * n) {
    for (let i = l; i <= r; i++) {
      res[t][i] = num++;
    }
    t++;
    for (let i = t; i <= b; i++) {
      res[i][r] = num++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      res[b][i] = num++;
    }
    b--;
    for (let i = b; i >= t; i--) {
      res[i][l] = num++;
    }
    l++;
  }
  return res;
};

console.log(generateMatrix(3));

// 代码随想录解法
var generateMatrix1 = function (n) {
  let startX = startY = 0; // 起始位置
  let loop = Math.floor(n / 2); // 旋转圈数
  const mid = Math.floor(n / 2);
  let offset = 1; // 控制每层填充元素个数
  let count = 1; // 填充数字
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX, col = startY;
    for (; col < n - offset; col++) {
      res[row][col] = count++;
    }
    for (; row < n - offset; row++) {
      res[row][col] = count++;
    }
    for (; col > startY; col--) {
      res[row][col] = count++;
    }
    for (; row > startX; row--) {
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    offset++;
  }

  if (n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
};

console.log(generateMatrix1(3));
