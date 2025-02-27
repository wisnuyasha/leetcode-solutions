## Approach

This problem requires :
- ignore non-alphanumeric chars & convert uppercase chars to lowercase
- checks if the string is palindrome or not (palindrome is a string that reads the same forwards/backwards)

My first approach is to :
- convert the uppercase string to lowercase & remove non-alphanumeric chars
- use two pointers to iterate and compare from the front and back of the string

### Solution 1 : Two Pointer

```js
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
            
    let i = 0
    let j = s.length - 1
    
    while (i <= j) {
        if(s[i] == s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    
    return true
};
```

this solution has O(N) time complexity and O(N) space complexity due to the string preprocesing.

after reading discussion, i found more effective approach :
- theres no need to preprocess the string
- during the loop; if non-alphanumeric char found, skip it by incre/decrement the index.
- convert both char to lowercase and compare them directly.

### Solution 2 : Improved

```js
var isPalindrome = function(s) {
    if(s.length == 0) return true
                
    let i = 0
    let j = s.length - 1
    
    while (i <= j) {
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++;
        } else if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--;
        } else {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
    }
    
    return true
};
```

although the time complexity is the same, the second solution improves runtime from 63 ms to 51 ms. this is because theres no need to preprocess the string first. it also have better space complexity (O(1)).

## Lesson Learned
- by using direct comparison, it has a faster runtime and saves additional space