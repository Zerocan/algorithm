/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  const arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);

  const topK = arr.slice(0, k);
  return topK.map((item) => item[0]);
};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3, 3, 3], 2));

// 小顶堆
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  push(item) {
    this.queue.push(item);

    let index = this.queue.length - 1;
    let parent = Math.floor((index - 1) / 2); // 父节点下标
    while (parent >= 0) {
      if (this.compare(parent, index) > 0) {
        this.swap(index, parent);
        index = parent;
        parent = Math.floor((parent - 1) / 2);
      } else {
        break;
      }
    }
  }

  pop() {
    // 堆顶元素
    const out = this.queue[0];
    this.queue[0] = this.queue.pop();

    // 下沉
    let parent = 0;
    let left = 1;
    let compareChildIndex = this.compare(left, left + 1) > 0 ? left + 1 : left;
    while (this.queue[compareChildIndex]) {
      if (this.compare(parent, compareChildIndex) > 0) {
        this.swap(parent, compareChildIndex);
        parent = compareChildIndex;
        left =  2 * parent + 1;
        compareChildIndex = this.compare(left, left + 1) > 0 ? left + 1 : left;
      } else {
        break;
      }
    }
    return out;
  }

  swap(i, j) {
    let temp = this.queue[i];
    this.queue[i] = this.queue[j];
    this.queue[j] = temp;
  }

  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    // if (this.queue[parent] === undefined) return 1;
    // if (this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }

  size() {
    return this.queue.length;
  }

  get() {
    return this.queue;
  }
}

var topKFrequent1 = function (nums, k) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  const heap = new Heap((a, b) => a?.[1] - b?.[1]);
  for (let entry of map.entries()) {
    heap.push(entry);
    if (heap.size() > k) {
      heap.pop()
    }
  }

  return heap.get().map(item => item[0]).reverse();
};

console.log(topKFrequent1([1,1,1,2,2,3, 3, 3, 4, 5, 4], 3))
