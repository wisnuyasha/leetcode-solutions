
## Approach
This problem requires to remove `nth` node from the end of the list

My approach :
- utilize slow & fast pointer
- use a dummy node -> place slow pointer at `dummy`, place fast pointer at `head`
- move the fast pointer `n` steps (fixed gap)
- move both pointers together until fast reaches the end (`null`).
- slow pointer is at the `(n+1)th` node, right before the target node.
- delete the target node directly using `slow.next = slow.next.next`.
- return `dummy.next`, represents the updated head.


### Why use dummy ?
actually, using a dummy node isn’t required, but it makes the code simpler and avoids extra checks for tricky cases. without a dummy node, we need to handle:
- removing the head when n is the same as the list length
- a list with only one node
- an empty list
with a dummy node, `slow` always has a previous node, so we can safely update `slow.next` without worrying about deleting the head.


## Solution

```js
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = head;
    let slow = dummy;
    
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next
};
```

time complexity O(N) -> traverses the list twice
- first, moving fast pointer n steps -> O(N)
- second, moving both fast and slow pointers -> O(N - n) ≈ O(N)
total complexity: O(N) + O(N) = O(N)

space complexity O(1) -> modifies the list in-place with a few pointers (constant)

## Illustration & Dry Run

![remove nth node from end](https://github.com/user-attachments/assets/3e1aaa56-d0e8-444f-b0ff-1c92f051dc95)

## Lesson Learned
- understanding edge cases (empty list, single-node list, deleting head) is crucial for writing linkedlist
- dummy node doesn't increase space complexity because it’s just one extra pointer (O(1)), doesn’t grow with input size, and modifies the list in place.
- returning `dummy.next` is best practice (clean code)
