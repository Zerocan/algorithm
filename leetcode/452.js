/**
 * @param {number[][]} points
 * @return {number}
 */
// 自己的思路
var findMinArrowShots = function(points) {
  // sort the balloons by their end position
  points.sort((a, b) => b[1] - a[1]);
  const balloonNum = points.length;
  // initialize the max x position of the balloon
  let maxX = Infinity;
  let count = 0;
  for (let i = 0; i < balloonNum; i++) {
    // if the current balloon's x position is larger than the current max x position
    // then we need a new arrow to shoot this balloon
    // and update the max x position
    if (points[i][1] >= maxX) {
      maxX = Math.max(maxX, points[i][0]);
    } else {
      // else we just move the max x position to the current balloon's x position
      // and increase the count
      maxX = points[i][0];
      count++;
    }
  }
  return count;
};

console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))

// 官方
var findMinArrowShots1 = function(points) {
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1]
  let ans = 1;

  for (let balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }

  return ans;
};