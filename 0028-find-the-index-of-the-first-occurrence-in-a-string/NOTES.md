## Approach

This problem requires :
- return index of the first occurrence of `needle` in `haystack`
- return `-1` if `needle` is not in `haystack`

My approach is to :
- base case, if `haystack` is shorter than length, return `-1`
- iterate thru `haystack` and compare it with `needle` to see if `needle` is found.

### Solution 1 : Brute Force

```js
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1
        
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] == needle[0]) {
            for(let j = 0; j <= needle.length; j++){
                if(j == needle.length) {
                    return i
                } else if(haystack[i + j] != needle[j]) {
                    break
                }
            }
        }
    } 
        
    return -1
};
```

This approach has an O(N*M) time complexity because of nested loops, and O(1) time complexity because theres no additional memory usage that depends on the inputs. 

After reading the discussions, i realized that what can be improved from first solution :
- loop should run up to `haylength - needle` length, ensuring that the loops is running until the index that `needle` still fits. (base case from solution 1 is implemented here too, if `needle` is longer, there will be no iteration)
- using `while` loop in the nested iteration makes the code clearer and avoid unnecessary additional loops.

### Solution 2 : Brute Force Improved


```js
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
        
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j == needle.length) return i;
    }
    
    return -1;
};
```

eventhough the time/space complexity are the same compared to the first solution, the improved code is more efficient because fewer iterations that performed. (improved from 60 ms to 53 ms runtime)

actually theres a solution that has the best performance, called `KMP` (up to 34 ms runtime). but i believe it is out of this context and may not be applicable in real interview test.

## Lesson Learned
- it is crucial to consider the loops structure because it can improve the performance.