/**
 * 桶、计数、基数
 *
 */

const { insertionSort } = require('./sort1');

/** 公共方法 */
// 寻找数组最大值
const findMaxValue = array => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// 寻找数组最小值
const findMinValue = array => {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

// 桶排序
/** 思路：
* 将数组中的数据，按桶进行划分，将相邻的数据划分在同一个桶中
* 每个桶用插入排序算法（或者快速排序）进行排序
* 最后整合每个桶中的数据
*/
const bucketSort = (array, bucketSize = 5) => {
  if (array.length <= 1) return array;
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
};

const createBuckets = (array, bucketSize) => {
  let minValue = findMinValue(array);
  let maxValue = findMaxValue(array);

  // 桶个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  // 建立一个二维数组，将桶放入buckets中
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }

  return buckets;
};

const sortBuckets = (buckets) => {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      const res = insertionSort(buckets[i]);
      sortedArray.push(...res);
    }
  }

  return sortedArray;
};

console.log('-------桶排序------');
console.log(bucketSort([0, 2, 2, 1, 1, 1, 6, 8, 5]));

// 计数排序
// 不稳定
const countingSort = array => {
  if (array.length <= 1) return array;

  const max = findMaxValue(array);
  const counts = new Array(max + 1);

  // 计算每个元素的个数，放入counts桶中
  // counts下标是元素，值是元素个数
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  // array: [6, 4, 3, 1], counts: [empty, 1, empty, 1, 1, empty, 1]
  // i是元素，count是元素个数
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while(count > 0) {
      array[sortedIndex] = i;
      sortedIndex++;
      count--;
    }
  })

  return array;
};

// 稳定
const stableCountingSort = array => {
  if (array.length <= 1) return array;

  const max = findMaxValue(array);
  const counts = new Array(max + 1);

  // 计算每个元素的个数，放入counts桶中
  // counts下标是元素，值是元素个数
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  console.log('累加之前的counts：', counts);

  // 依次累加
  for (let i = 1; i <= max; i++) {
    counts[i] = (counts[i] || 0) + (counts[i-1] || 0);
  }
  console.log('累加之后的counts：', counts);

  // 临时数组r，存储排序之后的结果
  const r = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    let index = counts[array[i]] - 1;
    r[index] = array[i];
    counts[array[i]]--;
  }

  return r;
};

console.log('-------不稳定的计数排序------');
const countTestArr = [0, 2, 2, 1, 1, 1, 6, 8, 5];
console.log('结果：', countingSort(countTestArr));

console.log('-------稳定的计数排序------');
const stableCountTestArr = [0, 2, 2, 1, 1, 1, 6, 8, 5];
console.log('结果：', stableCountingSort(stableCountTestArr));

// 基数排序
const radixSort = (array, maxDigit) => {
  
};

