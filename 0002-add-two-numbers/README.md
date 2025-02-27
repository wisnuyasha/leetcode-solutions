
## Approach
This problem requires to sum two linked lists.

My approach :
- utilize a dummy node and an integer to store the carry (for values greater than 9)
- iterate until both linked lists are fully processed (including any remaining carry).
- in each iteration, sum the current values of both lists and the carry (if any).
- create a new node with the sum’s last digit and link it to the dummy node.

## Solution

```js
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;
};
```

important edge cases to note :
- different length of `l1` & `l2`
- both `l1` and `l2` is `null`, but `carry` is not zero yet

important code that solves edge cases :
- the loop runs until `l1`, `l2`, and `carry` is all null / 0
- `let val1 = l1 !== null ? l1.val : 0;` with this, if list is null, treat its value as 0
- `if (l1 !== null) l1 = l1.next;` with this, if list is already null, we dont need to move forward.

with those conditions, all edge cases are handled cleanly

time complexity O(N) -> max(N,M), since we traverse both lists.
space complexity O(1) -> only integer and pointers that used.


## Illustration & Dry Run
![add two numbers](https://github.com/user-attachments/assets/917ca92f-9fc6-4123-b1ce-c54eb1132134)


## Lesson Learned
- handling edge cases properly makes the code cleaner and more readable.
