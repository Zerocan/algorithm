/**
 * 二分查找
 *
 */

// 简单的二分查找（循环）
const binaryFind = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1;

  let low = 0;
  let high = sortedArr.length - 1;

  while (high >= low) {
    // low 和 high 比较大的话，两者之和就有可能会溢出
    // 改进：low + (high - low) / 2
    // 性能优化（转为位运算，计算机处理更快）：low+((high-low)>>1)
    const mid = Math.floor((low + high) / 2);
    if (sortedArr[mid] === target) {
      return mid;
    } else if (sortedArr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
console.log(binaryFind(arr, 44));
console.log(binaryFind(arr, 1));
console.log(binaryFind(arr, 102));
console.log(binaryFind(arr, 1111));