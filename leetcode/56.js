/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  const res = [];
  let pos = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (pos[1] < intervals[i][0]) {
      res.push(pos);
      pos = intervals[i];
    } else {
      pos[1] = Math.max(pos[1], intervals[i][1]);
    }
  }
  res.push(pos);
  return res;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));