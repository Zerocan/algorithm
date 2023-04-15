/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 自己的思路：按照左边界按从小到大排序，若相等再按照右边界按从大到小排序
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  let removeCount = 0;
  let pos = intervals[0][0];
  for (let interval of intervals) {
    if (interval[0] < pos) {
      removeCount++;
      pos = Math.min(interval[1], pos);
    } else {
      pos = interval[1];
    }
  }

  return removeCount;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

// 官方思路：按右边界从小到大排序
var eraseOverlapIntervals1 = function (intervals) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let right = intervals[0][1];
  let ans = 1;
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] >= right) {
      ++ans;
      right = intervals[i][1];
    }
  }

  return intervals.length - ans;
};
