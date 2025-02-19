## Approach
this problem requires checking if there is a cycle in a linked list.

my approach :
- utilize a Set to store the visited node
- traverse the linked list :
    - if current node is not in Set, then add it
    - if current node is already in the Set, a cycle is confirmed

## Solution (hash)

```js
var hasCycle = function(head) {
    let visited = new Set();
    let current = head;
    
    while (current !== null) {
        if (visited.has(current)) {
            return true;
        }
        visited.add(current);
        current = current.next;
    }
    return false;
};
```

time complexity O(N) → traverse the entire list.
space complexity O(N) → extra space is required to store visited nodes in the Set.

This approach is straightforward but inefficient in terms of space usage, as it requires additional memory.

## Floyd's cycle solution

this is fast & slow pointer approach, the logic is :

- utilize two pointers: `slow` and `fast`.
- `slow` moves one step, while `fast` moves two steps in each iteration.
- if `slow` and `fast` meet, a cycle is confirmed.
- if `fast` reaches null, then there is no cycle.

i was initially skeptical about this approach, thinking that the fast pointer might overstep the slow pointer and miss the meeting point. but actually this approach has a mathematical proof ensuring that the pointers will meet if a cycle exists.

```js
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true;
        }
    }

    return false;
};
```

time complexity O(N) -> the worst case is when a cycle exists, in which case the pointers meet after traversing N (before cycle) + C (inside cycle) steps, which simplifies to O(N).
space complexity O(1) → only two pointers (slow and fast) are used, making this approach more space-efficient than the hash set solution.

## Illustration & Dry Run



## Lesson Learned

- learned how fast and slow pointers eliminate extra space complexity in cycle detection.
