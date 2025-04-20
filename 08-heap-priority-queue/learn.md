# Heap / Priority Queue

> **These notes are based on Abdul Bari's video**:  
> [Heap Data Structure | Complete Binary Tree | Max Heap | Min Heap | Heapify | Heap Sort](https://www.youtube.com/watch?v=HqPJF2L5h9U)  
> Everything below is a summary of the concepts explained in the video.

## Representation of Binary Tree Using Array

To store binary tree to an array:

- Store all the elements
- Relationship between them

### Relationship formulas:
- If a node is at index → `i`
- Left child → `2 * i`
- Right child → `(2 * i) + 1`
- Parent → `floor(i / 2)`

## Complete & Full Binary Tree

- **Full**: Has the maximum number of nodes in a height → `2^(h+1) - 1`
- **Complete**: No missing elements and no empty gaps, elements are filled from left-to-right

Height of a complete binary tree is `log N`.

## Heap

Heap is a full/complete binary tree.

### Max Heap

Every node has a value greater than or equal to all its descendants (root has the maximum value).

#### Insert
- **Time complexity**: Min = `O(1)`, Max = `O(log N)`
- **Steps**:
  - Add the new element as a leaf
  - Adjust it by comparing with the ancestor (sift up)

#### Delete
- **Time complexity**: Min = `O(1)`, Max = `O(log N)`
- **Steps**:
  - Only delete the root
  - Move the last element to the root
  - Adjust the elements (sift down):
    - If smaller than child → compare with larger child & swap
    - Push downwards toward leaf

### Min Heap

Every node has a value smaller than or equal to all its descendants (root has the minimum value).


---

## Heap Sort

If you have a heap, you can delete the root and place it into a new array to get a sorted array.

> HeapSort is **in-place sorting** (no extra array).

### Steps:
1. Create a heap from given elements
2. Delete all elements → elements will be sorted

### How to Create a Heap

**Insertion (sift up):**
- Assume the first element is already a heap
- Insert the next element, compare and adjust upwards

> Insert Time Complexity: `O(N log N)`

**Deletion (sift down):**
- Delete all elements one by one
- Move root to end of the array

> Delete Time Complexity: `O(N log N)`

**Total HeapSort Time Complexity: `O(N log N)`**

---

## Heapify

Heapify is a procedure to create a heap by adjusting elements from the bottom-up.

- Similar to BFS bottom-up or recursive
- Compare node, left, and right — typically done right-to-left

> Time Complexity: `O(N)`

---

## Priority Queues

Elements have priority and are inserted/deleted based on that priority.

- Smaller number = higher priority → use **Min Heap**
- Larger number = higher priority → use **Max Heap**

> **Time Complexity:** `O(log N)`

Priority Queue is an **abstract data structure**.  
**Heap** is one way to implement it efficiently.

---

## Heapify vs HeapSort

| Concept     | Description                                                                 | Time Complexity |
|-------------|-----------------------------------------------------------------------------|-----------------|
| **Heapify** | Turns a regular array into a valid heap (max or min) using bottom-up sifts | `O(N)`          |
| **HeapSort**| Sorting algorithm using heapify + repeated root removal and placement      | `O(N log N)`    |

## Min/MaxHeap Class Code
This code contains MaxHeap class with insert and delete (remove root) operations. change the comparison to `<` (according to this code) to use it as MinHeap

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  siftUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      // actively compare current index with the parents using above formulas (to get parent idx)
      if (this.heap[i] > this.heap[parent]) {
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
      if (left < n && this.heap[left] > this.heap[largest]) largest = left;
      if (right < n && this.heap[right] > this.heap[largest]) largest = right;

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
```