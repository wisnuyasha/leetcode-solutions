class MaxHeap {
  constructor() {
    this.heap = [];
  }

  siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i] > this.heap[p]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  siftDown(i) {
    const n = this.heap.length;

    while (true) {
      const left = i * 2 + 1,
        right = i * 2 + 2;
      let largest = i;

      if (left < n && this.heap[left] > this.heap[largest]) largest = left;
      if (right < n && this.heap[right] > this.heap[largest]) largest = right;

      if (largest !== i) {
        [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
        i = largest;
      } else break;
    }

    return removed;
  }

  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }

  removeRoot() {
    const last = this.heap.length - 1;
    if (last < 0) return null;

    [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]];
    const removed = this.heap.pop();

    this.siftDown(0);

    return removed;
  }

  heapify(arr) {
    this.heap = [...arr];
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxHeap();
  heap.heapify(stones);

  while (heap.size() >= 0) {
    const y = heap.removeRoot();
    const x = heap.removeRoot();
    if (y !== x) heap.insert(y - x);
  }

  return heap.size() === 1 ? heap.peek() : 0;
};
