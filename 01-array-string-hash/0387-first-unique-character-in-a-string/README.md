## Analysis

This problem requires :
- find the first non-repeating char & return its index
- if no such char exists, return `-1`

## Thought process

My approach is to :
- first loop is to count the occurences of unique char
- second loops is to search the character that occurs only once / `== 1`, if no such chars found, return `-1`

### Solution

```js
var firstUniqChar = function(s) {
    let h = {}
    
    for(let i = 0; i < s.length; i++) {
        h[s[i]] = (h[s[i]] || 0) + 1
    }
    
    for(let j = 0; j < s.length; j++) {
        if(h[s[j]] == 1) {
            return j
        }
    }
 
    return -1
};
```

With this approach, the time complexity is O(N) due to the two loops, and space complexity is O(K) where `k` is the unique char in the string.

## Lesson Learned
- Sometimes looping thru more than one loop is necessary. i was struggle to find the solution because i thought that it must be done in a single loops