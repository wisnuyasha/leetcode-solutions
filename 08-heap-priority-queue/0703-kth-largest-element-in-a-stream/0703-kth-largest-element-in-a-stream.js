class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parent]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  removeRoot() {
    const last = this.heap.length - 1;
    if (last < 0) return null;

    [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]];
    const removed = this.heap.pop();

    let i = 0;
    const n = this.heap.length;

    while (true) {
      const left = i * 2 + 1,
        right = i * 2 + 2;
      let smallest = i;

      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else break;
    }

    return removed;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function clear(heap, k) {
  if (heap.size() > k) heap.removeRoot();
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    this.heap.insert(nums[i]);
    clear(this.heap, k);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.insert(val);
  clear(this.heap, this.k);
  return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
