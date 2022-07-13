/**
 * 冒泡,插入,选择排序
 *
 */

// 冒泡排序
const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) {
      break;
    }
  }
  return arr;
};

const testArr = [4, 5, 6, 3, 2, 1];
console.log('冒泡：', bubbleSort(testArr));