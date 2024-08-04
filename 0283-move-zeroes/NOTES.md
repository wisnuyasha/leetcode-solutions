## Analysis

The problem requires:
- Moving all `0` to the end of the array
- Doing this without copying the array

With the hint :
> A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.

My approach is to swap the non zero values to the front of the array so that all the zero element will be placed at the back of the array. Using two pointer approach, the first pointer iterates through the entire array, and the second pointer keeps track of the position to place the non-zero elements. To minimize operation, swap is only performed if the two pointers are not the same.

### Solution
```js
var moveZeroes = function(nums) {
    let j = 0
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i]
        if(nums[i] !== 0) {
            if(i !== j) {
                nums[i] = nums[j]
                nums[j] = currNum
            }
            j++
        }
    }
    
    return nums
};
```

The time complexity is O(N) (linear time) and the space complexity is O(1) (only constant space)

## Lesson Learned

- Two Pointer : 
This technique is very useful for array manipulation problems. For example, it helps when maintaining two indexes for tasks such as swapping elements or other in-place operations.
