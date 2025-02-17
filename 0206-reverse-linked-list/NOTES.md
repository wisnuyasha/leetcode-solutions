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


## Lesson Learned

- learned how a linked list works, including how node pointers function and how to manipulate them efficiently.

- in a linked list, all variable declarations are pointers, for example : 
    - `let curr = head` creates a pointer curr to head
    - `prev = curr` updates `prev` to reference `curr`
    - `curr.next` = `prev` changes `curr.next` to point to `prev`, reversing the link.