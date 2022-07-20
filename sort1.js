/**
 * 冒泡、插入、选择排序
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

console.log('冒泡：', bubbleSort([4, 5, 2, 6, 3, 2, 1]));

// 插入排序
const insertionSort  = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    // 若arr[i]前有大于arr[i]的值的化，向后移位，腾出空间，直到一个<=arr[i]的值
    for (j; j >= 0; j--) {
      if (temp  < arr[j]) {
        arr[j + 1] = arr[j]
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log('插入：', insertionSort([4, 5, 2, 6, 3, 2, 1]));

// 选择排序
const selectionSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let j = i + 1;
    for (j; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};

console.log('选择：', selectionSort([4, 8, 6, 3, 2, 1, 0, 12]));