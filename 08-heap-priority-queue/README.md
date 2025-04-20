# Heap / Priority Queue

## Problems todo
**Easy**
- [x] [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
- [x] [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)

**Medium**
<!-- - [ ] [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) -->
- [x] [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [x] [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/) (bonus)
<!-- - [ ] [Task Scheduler](https://leetcode.com/problems/task-scheduler/) -->
<!-- - [ ] [Design Twitter](https://leetcode.com/problems/design-twitter/) -->

**Hard**
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)


## Key Concepts
[heap/pq key concepts](learn.md)

## Common Techniques & Patterns
- **Min Heap -> Maintain K Largest Elements**  
  maintain a min heap of size `k` to keep track of the top `k` largest elements. if the heap grows beyond `k`, remove the smallest element. ensures that the smallest among the largest is always on top and can be compared against new values efficiently.  
  Used in: [Kth Largest Element in a Stream](0703-kth-largest-element-in-a-stream/), [Kth Largest Element in an Array](0215-kth-largest-element-in-an-array/)

- **Max Heap -> Process Largest Elements First**  
  use a max heap when you repeatedly need to access and modify the largest element, such as where the biggest item is consumed or combined  
  Used in: [Last Stone Weight](1046-last-stone-weight/), [Remove Stones to Minimize the Total](1962-remove-stones-to-minimize-the-total/)

- **Heapify to Build Initial Heap**  
  build a heap from an existing array in linear time (`O(N)`) using bottom-up heapification, allows immediate use of heap operations without inserting elements one-by-one.  
  Used in: [Remove Stones to Minimize the Total](1962-remove-stones-to-minimize-the-total/), [Last Stone Weight](1046-last-stone-weight/)


<!-- [Kth Largest Element in a Stream](0703-kth-largest-element-in-a-stream/)  
[Last Stone Weight](1046-last-stone-weight/)  
[Kth Largest Element in an Array](0215-kth-largest-element-in-an-array/)  
[Remove Stones to Minimize the Total](1962-remove-stones-to-minimize-the-total/)   -->
<!-- [K Closest Points to Origin](0973-k-closest-points-to-origin/)   -->
<!-- [Task Scheduler](0621-task-scheduler/)  
[Design Twitter](0355-design-twitter/)   -->
<!-- [Find Median from Data Stream](0295-find-median-from-data-stream/) -->