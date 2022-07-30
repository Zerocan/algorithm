/**
 * 归并、快速、第k大的数
 *
 */

// 归并排序
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeArr = []
let i = 0
while (i < 100) {
  mergeArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('归并：', mergeSort(mergeArr));

// 快排
const swap = (arr, i, j) => {
  if (i === j) return;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivotValue) {
      swap(arr, j, i);
      i++;
    }
  }
  swap(arr, i, pivot);
  return i;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    // 粗暴地直接选择第一个或者最后一个数据作为分区点，不考虑数据的特点
    // 在某些情况下，排序的最坏情况时间复杂度是 O(n^2)。
    // 可采用随机或三数取中法
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
};

const quickArr = []
let j = 0
while (j < 10) {
  quickArr.push(Math.floor(Math.random() * 1000))
  j++
}
console.log('快排：')
console.log('unsort', quickArr)
quickSort(quickArr, 0, quickArr.length - 1);
console.log('sort', quickArr)

// 求第k大的数
// O(n) 时间复杂度内求无序数组中的第 K 大元素。
// 比如，4， 2， 5， 12， 3 这样一组数据，第 3 大元素就是 4。
const kthNum = (arr, k) => {
  const len = arr.length;
  if (k > len) return -1;
  let p = kPartition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = kPartition(arr, 0, p - 1);
    } else {
      p = kPartition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
};

const kPartition = (arr, start, end) => {
  let i = start;
  let pivotValue = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] > pivotValue) {
      swap(arr, j, i);
      i++
    }
  }
  swap(arr, i, end);
  return i;
};

console.log('求第k大的数: ', kthNum([3,2,3,1,2,4,5,5,6], 4));