/**
 * @param {string} s
 * @return {string[][]}
 */
// 自己实现
var partition = function (s) {
  const res = [];
  let path = [];
  // sliceStart 分割的开始位置
  const backtracking = (sliceStart) => {
    if (path[path.length - 1] && !isPartition(path[path.length - 1])) {
      return;
    }
    if (path.join('').length === s.length) {
      res.push([...path]);
      return;
    }

    for (let i = 1; i <= s.length - sliceStart; i++) {
      // i 等于分割长度
      path.push(s.slice(sliceStart, i + sliceStart));
      backtracking(sliceStart + i);
      path.pop();
    }
  };

  backtracking(0);
  return res;
};

const isPartition = (str) => {
  let low = 0;
  let high = str.length - 1;
  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    }
    low++;
    high--;
  }

  return true;
};

// 代码随想录解法
var partition1 = function (s) {
  const res = [];
  let path = [];
  // startIndex 切割的起始位置
  const backtracking = (startIndex) => {
    if (startIndex === s.length) {
      res.push([...path]);
      return;
    }

    // i 切割的终点位置
    for (let i = startIndex; i < s.length; i++) {
      if (isPartition(s.slice(startIndex, i + 1))) {
        path.push(s.slice(startIndex, i + 1));
      } else {
        continue;
      }
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return res;
};
