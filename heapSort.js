/**
 * 堆排序
 */

// 忽略数组第一位
class HeapSort {
  constructor(originArr) {
    this.originArr = originArr;
    console.log('originArr: ', originArr);
  }

  buildHeap() {
    const arr = this.originArr;
    const startIndex = Math.floor(arr.length / 2);
    for (let i = startIndex; i >= 1; i--) {
      this.heapify(arr, arr.length, i);
    }
    return arr;
  }

  heapify(arr, len, i) {
    while (true) {
      let maxPos = i;
      if (i * 2 < len && arr[i] < arr[i * 2]) {
        maxPos = i * 2;
      }
      if (i * 2 + 1 < len && arr[maxPos] < arr[i * 2 + 1]) {
        maxPos = i * 2 + 1;
      }
      if (maxPos === i) break; // 跳出while循环
      this.swap(arr, i, maxPos);
      i = maxPos;
    }
  }

  sort() {
    const arr = this.buildHeap();
    let len = arr.length - 1;
    while (len > 1) {
      this.swap(arr, len, 1);
      len--;
      this.heapify(arr, len, 1);
    }
    console.log('after sort: ', arr);
  }

  swap(arr, i, max) {
    let temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
  }
}

const arr = [null];
let i = 0;
while (i <= 10) {
  const num = Math.floor(Math.random() * 100);
  arr.push(num);
  i++;
}
const testHeap = new HeapSort(arr);
testHeap.sort();