/**
 * @param {number[]} heights
 * @return {number}
 */
// 错误
// var largestRectangleArea = function (heights) {
//   const heightsArrWithoutZero = splitArray(heights, 0);
//   let max = 0;
//   for (let arr of heightsArrWithoutZero) {
//     max = Math.max(max, rectangleAreaWithoutZero(arr));
//   }

//   return max;
// };

// function splitArray(arr, item) {
//   return arr.reduce(
//     (result, element) => {
//       if (element === item) {
//         result.push([]);
//       } else {
//         result[result.length - 1].push(element);
//       }
//       return result;
//     },
//     [[]]
//   );
// }

// var rectangleAreaWithoutZero = (heights) => {
//   const len = heights.length;
//   let left = 0;
//   let right = len - 1;
//   let res = 0;
//   while (left <= right) {
//     res = Math.max(res, (right - left + 1) * minNum(heights, left, right));
//     if (heights[left] < heights[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return res;
// };

// var minNum = (arr, left, right) => {
//   let min = Infinity;
//   for (let i = left; i <= right; i++) {
//     min = Math.min(min, arr[i]);
//   }

//   return min;
// };

var largestRectangleArea = function (heights) {
  let max = 0;
  const stack = [];
  heights = [0, ...heights, 0]; // 数组头部加入元素0 数组尾部加入元素0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const mid = stack.pop();
      const left = stack[stack.length - 1];
      max = Math.max(max, heights[mid] * (i - left - 1));
    }
    stack.push(i);
  }

  return max;
};

console.log(largestRectangleArea([4, 2, 0, 3, 2, 4, 3, 4]));

// 双指针
var largestRectangleArea1 = function (heights) {
  const len = heights.length;
  const minLeftIndex = new Array(len);
  const minRigthIndex = new Array(len);

  minLeftIndex[0] = -1;
  for (let i = 1; i < len; i++) {
    let t = i - 1;
    while (t >= 0 && heights[t] >= heights[i]) {
      t = minLeftIndex[t];
    }
    minLeftIndex[i] = t;
  }

  minRigthIndex[len - 1] = len;
  for (let i = len - 2; i >= 0; i--) {
    let t = i + 1;
    while (t <= len - 1 && heights[t] >= heights[i]) {
      t = minRigthIndex[t];
    }
    minRigthIndex[i] = t;
  }

  // 求和
  let maxArea = 0;
  for (let i = 0; i < len; i++) {
    let area = heights[i] * (minRigthIndex[i] - minLeftIndex[i] - 1);
    maxArea = Math.max(maxArea , area);
  }

  return maxArea;
};

console.log(largestRectangleArea1([4, 2, 0, 3, 2, 4, 3, 4]));
