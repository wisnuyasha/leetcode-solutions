## Approach
This problem requires reordering a linked list by rearranging its nodes so that they alternate between the first and last elements.

My approach :
- divide the linkedlist with [slow and fast pointer technique](../0143-reorder-list/README.md#illustration--dry-run)
- get the `slow.next` pointer and store it in `curr`, then disconnect `head` from `slow.next`.
- reverse the `curr` using [iterative technique](../0206-reverse-linked-list/README.md#illustration--dry-run)
- merge the two halves:
    - assign `first` to point to `head` and `second` to point to `curr`.
    - use `tmp1` and `tmp2` to store the next nodes of `first` and `second`.
    - set `first.next` to `second`, then set `second.next` to `tmp1`.
    - slide `first` and `second` forward using `tmp1` and `tmp2`.

## Solution
```js
var reorderList = function(head) {
    if (!head || !head.next) return;

    let slow = head, fast = head
    while(fast?.next?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let curr = slow.next, prev = null
    slow.next = null;
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let first = head
    let second = prev
    while(second) {
        let tmp1 = first.next, tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1;
        second = tmp2;
    }
};
```

time complexity O(N) -> it has 3 main loops, 
- slow & fast pointer traversal takes O(N/2).
- reversal of the second half takes O(N/2).
- merging of both halves takes O(N). 

it runs O(N) -> O(N/2) + O(N/2) + O(N) = O(N).


space complexity O(1) -> the algorithm is modified in-place without using extra spaces (only pointers).

## Illustration & Dry Run
![Reorder List](https://github.com/user-attachments/assets/7d91aebe-1d7a-47d3-be87-b604e95dbef8)

[slow and fast pointer technique](../0143-reorder-list/README.md#illustration--dry-run)


[reverse iterative technique](../0206-reverse-linked-list/README.md#illustration--dry-run)

## Lesson Learned

- integrates technique that i learned before to solve this problem
- cutting the head with the slow pointer can be done in two steps
    - assign the `slow.next` to a new pointer
    - set the `slow.next` to `null`
  this effectively disconnects the first half from the second half.
- learned how to merge a linked list in-place (without using a dummy node).
- learned clean code practices, naming conventions, and structuring code in linked list problems.
