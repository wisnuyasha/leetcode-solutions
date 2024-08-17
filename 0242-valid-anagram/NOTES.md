## Analysis

This problem requires :
- concludes the two given string whethers its an anagram string or no
- anagram is simply a word that contains the same letter and length even its randomized.

## Thought process

### Attempt Solution 1 : Sort

My first attempt to solve this is = 
- base case, return `false` if the lengths of string arent the same
- sort both string
- compare both sorted strings character by character

```js
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
        
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")
        
    for(let i = 0; i < sortedS.length; i++) {
        if(sortedS.charAt(i) !== sortedT.charAt(i)) return false
    }
    
    return true
};
```

The time complexity with this sort approach is O(nlogn), and it also use more additional memory to store the sorted string. 

### Attempt Solution 2 : Hashmap

My second approach is to use hashmap to store and `count` the letter :
- loop thru the first string to the hashmap, where the key is the letter and the value is its `count` (increment)
- loop thru the second string, decrementing the `count` for each character found in the hashmap. if a char isnt found or the ``count`` is zero, return false.


```js
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let h = {}
    
    for(let i = 0; i < t.length; i++) {
        if(s.charAt(i) in h ) {
            h[s.charAt(i)] += 1
        } else {
            h[s.charAt(i)] = 1
        }
    }
        
    for(let i = 0; i < s.length; i++) {
        if(t.charAt(i) in h) {
            if(h[t.charAt(i)] == 0) {
                return false
            }
            h[t.charAt(i)] -= 1
        } else {
            return false
        }
    }
    
    return true
};
```

i optimized the code (those two loops) to make it cleaner :

### Hashmap optimized
```js 
    for (let i = 0; i < s.length; i++) {
        h[s[i]] = (h[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!h[t[i]]) return false;
        h[t[i]]--;
    }
```

With this hashmap approach, the time complexity is O(N) due to the two loops and space complexity is O(N) for storing the hashmap.

## Lesson Learned
- Anagram can be determined by two ways, sorting and comparing the strings or by counting each letter using a hash.
- Hashmap is more efficient than sorting, which uses less memory and has a lower time complexity