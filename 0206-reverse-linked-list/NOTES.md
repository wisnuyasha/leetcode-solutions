## Approach
this problem requires reversing a linked list :D

my approach :
- utilize two pointers, `prev` to store the reversed linked list & `curr` to traverse the original linked list.
- before redirecting `curr` to `prev` (initially `null`), store `curr.next` in a `next` pointer
- after setting `curr.next` to `prev`, move the `prev` pointer to `curr`.
- move `curr` to `next`, which holds the reference to the original `curr.next`.

with this approach, the linked list will be reversed, pointing in the opposite direction.

## Solution
```js
var reverseList = function (head) {
    let curr = head
    let prev = null

    while(curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};
```

this solution has O(N) time complexity (traverse all nodes in linked list) and O(1) space complexity (uses a constant number of extra variables regardless of input size)


## Illustration & Dry Run

![Reverse Linked List](https://github.com/user-attachments/assets/6ad8a2d3-15c9-4b66-8372-cd03efb168c6)


## Recursive Solution

the recursive solution is an important approach, here’s the logic:

- traverse the linked list recursively, similar to a stack-like execution that processes nodes from last to first.
- when it reaches the last node, return it (`5 → null`).
- after reaching the last node, reverse the `next` pointer so that each node points to its previous node (`4 ← 5`).
- set `head.next = null` to prevent cycles (`null ← 4 ← 5`).

```js
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedHead;
};
```
this solution has a time complexity of O(N). technically, it performs 2N operations (one pass going down and one returning), but in bigO notation, constants are ignored, so it simplifies to O(N). space complexity is O(N) because each recursive call is stored in the call stack until the base case is reached. This makes the recursive approach less efficient than the iterative approach, which has O(1) space complexity.

## Illustration & Dry Run


## Lesson Learned

- learned how a linked list works, including how node pointers function and how to manipulate them efficiently.

- in a linked list, all variable declarations are pointers, for example : 
    - `let curr = head` creates a pointer curr to head
    - `prev = curr` updates `prev` to reference `curr`
    - `curr.next` = `prev` changes `curr.next` to point to `prev`, reversing the link.