/**
 * 二分查找及其变形
 * 1.查找第一个等于给定值 2.查找最后一个等于给定值
 * 3.查找第一个大于等于给定值 4.查找最后一个小于等于给定值
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

console.log('------------- 普通的二分查找 ------------');
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
console.log(binaryFind(arr, 44));
console.log(binaryFind(arr, 1));
console.log(binaryFind(arr, 102));
console.log(binaryFind(arr, 1111));

// 查找第一个等于给定值
const biaryFindFirst = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1;

  let low = 0;
  let high = sortedArr.length - 1;

  while (high >= low) {
    const mid = low + ((high - low) >> 1);
    if (sortedArr[mid] < target) {
      low = mid + 1;
    } else if (sortedArr[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === 0 || sortedArr[mid - 1] !== target) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

console.log('------------- 查找第一个等于给定值 ------------');
const first = biaryFindFirst([1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9], 4)
console.log(`biaryFindFirst: ${first}`)

// 查找最后一个等于给定值
const biaryFindLast = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1;

  let low = 0;
  let high = sortedArr.length - 1;

  while (high >= low) {
    const mid = low + ((high - low) >> 1);
    if (sortedArr[mid] < target) {
      low = mid + 1;
    } else if (sortedArr[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] !== target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}

console.log('------------- 查找最后一个等于给定值 ------------');
const last = biaryFindLast([1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9], 4)
console.log(`biaryFindLast: ${last}`)

// 查找第一个大于等于给定值
const biaryFindFistBig = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (high >= low) {
    const mid = low + ((high - low) >> 1);
    if (sortedArr[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || sortedArr[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

console.log('------------- 查找第一个大于等于给定值 ------------');
const firstBig = biaryFindFistBig([1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9], 4);
console.log(`biaryFindFistBig: ${firstBig}`);

// 查找最后一个小于等于给定值
const biaryFindLastSmall = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (high >= low) {
    const mid = low + ((high - low) >> 1);
    if (sortedArr[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === sortedArr.length || sortedArr[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}

console.log('------------- 查找最后一个小于等于给定值 ------------');
const lastSmall = biaryFindLastSmall([1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9], 5);
console.log(`biaryFindLastSmall: ${lastSmall}`);