## Approach
This problem requires
- check if string `s` is part of string `t` (with the same order, but not consecutively)

My approach :
- iterate thru string `t` using `i`, and using index `j` to track progress in `s` string
- if `s[j]` match `t[i]`, increment index `j` to checkk the next char in `s`
- if the index `j` is equal to length of `s` then return `true` (all char is matched)

## Solution
```js
var isSubsequence = function(s, t) {
    if (s === "") return true
    let j = 0
    for(let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) j++
        if (j == s.length) return true
    }
    return false
};
```
This solution has O(N) time complexity (traverse string `t` once) and O(1) space complexity (only two pointer and its independent from input)


## Lesson Learned

- improving understanding of the two-pointer tech to solve sequence-related problems.