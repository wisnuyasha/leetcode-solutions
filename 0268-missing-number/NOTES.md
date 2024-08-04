## Analysis

What the problem wants is :
- Find the missing number in an array of length n.

It took me a while to find the solution to this problem. I found that the simplest solution is to substract the  sum of the leemnts int hte array from the expected sum of the first n natural numbers. For example `[3, 0, 1]`, actual sum = `(3 + 0 + 1)`, expected sum = `(0 + 1 + 2 + 3)`. subtracting these gives 6 - 4 = 2, which is the missing element.

### Solution
```js
var missingNumber = function(nums) {
    let sum1 = 0
    let sum2 = 0
    
    for(let i = 0; i < nums.length; i++) {
        sum1 += nums[i]
        sum2 += (i + 1)
    }
        
    return (sum2 - sum1)
};
```

The time complexity is O(N) (linear time) and the space complexity is O(1) (only constant space)

## Lesson Learned

- Understand the problem thoroughly to find the simplest and most efficient solution.
