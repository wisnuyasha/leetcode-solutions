class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    siftUp(i) {
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        // actively compare current index with the parents using above formulas (to get parent idx)
        if (this.heap[i] < this.heap[parent]) {
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
  
        // compare current index with decendants (if left/right is out of array, skip to break)
        if (left < n && this.heap[left] < this.heap[largest]) largest = left;
        if (right < n && this.heap[right] < this.heap[largest]) largest = right;
  
        // if theres a smaller value than current index, swap to the decendants (child)
        if (largest !== i) {
          [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
          i = largest;
        } else break;
      }
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
  
  function clear(heap, k) {
    if (heap.size() > k) heap.removeRoot();
  } 
  
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  var findKthLargest = function(nums, k) {
      const heap = new MinHeap()
  
      for(let i = 0; i < nums.length; i++) {
          heap.insert(nums[i])
          clear(heap, k)
      }
  
      return heap.peek()
  };