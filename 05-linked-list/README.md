# Linked Lists

## Problems todo
- [x] [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [x] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [x] [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [x] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [x] [Reorder List](https://leetcode.com/problems/reorder-list/)
- [ ] [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)
- [x] [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
- [ ] [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/)
- [ ] [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [ ] [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Key Concepts
- **Node Structure** → A linked list consists of nodes containing a value and a pointer to the next node.
- **Recursive vs. Iterative Approaches** → Some problems (like reversing a linked list) can be solved both iteratively and recursively.
- **Pointer Manipulation** → Since there are no indices, traversal and updates require careful pointer handling.
- **Cycle Detection** → Detecting cycles in a linked list using the Floyd’s algorithm (Fast & Slow Pointers).
- **Dummy Nodes** → Simplifies insertion and deletion, especially at the head.

## Common Techniques & Patterns
- **Reversing a linked list**  
  Reverse the direction of links using a pointer manipulation technique. Can be done iteratively with 2 pointers or recursively.  
  Used in: [Reverse Linked List](0206-reverse-linked-list/), [Reorder List](0143-reorder-list/).

- **Merging two sorted linked lists**  
  Use a dummy node and a two-pointer technique to efficiently merge two sorted lists into one.  
  Used in: [Merge Two Sorted Lists](0021-merge-two-sorted-lists/), [Reorder List](0143-reorder-list/).

- **Cycle detection with fast and slow pointers**  
  The Floyd’s Tortoise and Hare algorithm uses two pointers moving at different speeds to detect cycles in O(n) time.  
  Used in:  [Linked List Cycle](0141-linked-list-cycle/).

- **Finding the middle or nth node from the end**  
  Use two pointers: one moves ahead `n` steps, then move both together until the first pointer reaches the end.  
  Used in: [Remove Nth Node From End of List](0019-remove-nth-node-from-end-of-list/), [Reorder List](0143-reorder-list/).

- **Using a dummy node for easier insertion/deletion**  
  Dummy nodes help simplify edge cases, such as removing the head node or merging lists without additional conditionals.  
  Used in: [Merge Two Sorted Lists](0021-merge-two-sorted-lists/), [Remove Nth Node From End of List](0019-remove-nth-node-from-end-of-list/), [Add Two Numbers](0002-add-two-numbers/)