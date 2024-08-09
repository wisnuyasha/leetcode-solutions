## Analysis

This problem requires :
- Finding the possible prefix that included on all strings in the array
- If theres no common prefix, return an empty string

## Thought process

My approach is to :
- Use an array for storing the strings
- Compare the first element with the all the other element
- Use 2 indexes, `i` for iterating through the elements in the array and `j` for iterating through the characters in the strings
- During the `j`'s iteration, if the strings match, continue iterating. if not, return the current array (prefix), whether its empty or not

### Attempt Solution 1 : Prefix Comparison
```js
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    
    let ans = ""
    for(let i = 0; i < strs[0].length; i++){
        let j = 1
        let char = strs[0].charAt(i);
        while(j < strs.length){
            if(i >= strs[j].length || strs[j].charAt(i) !== char) {
                return ans
            }
            j++
        }
        ans += char
    }
     
    return ans
};
```
The time complexity is `O(N * M)`, `N` is the tonumber of element in the array, and `M` is length of the string. The space complexity is `O(M)`, `M` is the length of the common prefix

After reading the discussion, i found a unique idea. sorting the array so that we can just compare the first and the last string. For example, `[flower, flow, light, low, flight]` when sorted becomes -> `[flight, flow, flower, light, low]`

- the first and the last will always reveal the differeces in the prefix

After getting the first and last string, compare the characters of the first and last strings with the same approach as in first solution.

### Attempt Solution 2 : Sort
```js
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    
    let ans = ""
    strs.sort()
    
    const fs = strs[0];
    const ls = strs[strs.length - 1];
    
    for(let i = 0; i < fs.length; i++) {
        if(fs.charAt(i) == ls.charAt(i)) {
           ans += strs[0].charAt(i)
        } else {
            return ans
        }
    } 
     
    return ans
};
```

The time complexity is `O(N * logN * M)`, `N*logN` is the sorting time, and M is the length of longest prefix. The space complexity is `O(M)`, `M` is the length of the common prefix.

### Prefix vs Sort
The second solution had the better runtime and memory (48ms & 49.2mb) compared to the first solution (60mb & 49.8mb). ( After i research a bit, leetcode measurements can vary due to server load, execution environment, gitetc, so these differences are not always a direct reflection of the algorithms efficiency. )

`O(N * logN * M)`'s approach can be more efficient than `O(N * M)` on larger test cases because sorting can significantly reduces the number of comparison needed. this allow the logic to focus on a single iteration comparing just first and last string. however, the `O(N * M)` might be faster for smaller test cases.

## Lesson Learned
- Think outside the box and understanding the problem from different angles is very important for finding the most efficient solution
- Two pointer solution is effective for comparing each characters, but sorting can simplify the process by allowing differences to be identified quickly.