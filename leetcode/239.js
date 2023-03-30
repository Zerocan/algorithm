/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 超时
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const curr = [];
  for (let i = 0; i < k; i++) {
    curr.push(nums[i]);
  }
  res.push([...curr].sort((a, b) => a - b)[k - 1]);
  let i = k;
  while (i < nums.length) {
    curr.shift();
    curr.push(nums[i]);
    res.push([...curr].sort((a, b) => a - b)[k - 1]);
    i++;
  }

  return res;
};

console.log(maxSlidingWindow([3, -1, 2, 4], 2));

class MonoQueue {
  constructor() {
    this.queue = [];
  }

  out(val) {
    if (this.queue.length && val === this.queue[0]) {
      this.queue.shift();
    }
  }

  in(val) {
    while (this.queue.length && this.queue[this.queue.length - 1] < val) {
      this.queue.pop();
    }
    this.queue.push(val);
  }

  getMax() {
    return this.queue[0];
  }
}

var maxSlidingWindow1 = function (nums, k) {
  const monoQueue = new MonoQueue();
  const res = [];
  let i = 0;
  let j = 0;
  while (j < k) {
    monoQueue.in(nums[j]);
    j++;
  }
  res.push(monoQueue.getMax());

  while (j < nums.length) {
    monoQueue.out(nums[i]);
    monoQueue.in(nums[j]);
    res.push(monoQueue.getMax());
    j++;
    i++;
  }

  return res;
};

console.log(maxSlidingWindow1([3, -1, 2, 4], 2));
