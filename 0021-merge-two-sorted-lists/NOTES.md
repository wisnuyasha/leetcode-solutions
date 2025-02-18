## Approach
This problem requires merging 2 different linked list in a sorted order

My approach :
- create a `dummy` node as a placeholder for storing the merged result.
- use a `current` pointer that acts as an iterator to build the merged linked list.
- iterate through both linked lists:
    - if `list1`'s current value is smaller than `list2`'s, set `current.next` to `list1` and move `list1` to the next node (same for list2)
    - move `current` to `current.next` to continue building the merged list
- attach the remaining elements from `list1` or `list2` if any nodes are left unprocessed.
- return `dummy.next`, as `dummy` is just a placeholder used to construct the merged list.

## Solution

```js
var mergeTwoLists = function(list1, list2) {
    let dummy = { val: -1, next: null };
    let current = dummy;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) { 
            current.next = list1
            list1 = list1.next
        }
        else {  
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;
    
    return dummy.next
};
```

this solution has O(M + N) time complexity (traverse list1 and list2 until end) and O(1) space complexity (dummy is an pointer, doesnt add to additional memory)

## Illustration & Dry Run


## Lesson Learned

- learned to utilize dummy linked list node.
- learned that assigning a pointer to another pointer allows direct modification of the referenced object -> `let current = dummy`
- why `current` is used ?
    - the starting point of the merged linked list stays the same and doesnt get lost.
    - we dont lose track of `dummy.next`, which would happen if `dummy` were used as the iterator.