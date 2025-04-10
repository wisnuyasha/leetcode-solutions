
## Approach
this problem require to search the minimum element in a rotated sorted array with distinct integers.

main idea is :
- even though the array is rotated it still contains a sorted portion
- if the middle-to-the right is sorted `(nums[m] < nums[r])` -> then the minimum lies in the **left**, possibly including `m` 
- If not, the minimum lies in the right side (m + 1 onward)

## Solution

```js
var findMin = function (nums) {
    let l = 0, r = nums.length - 1
    // base case
    if (nums[l] < nums[r]) return nums[l]

    while (l < r) {
        let m = Math.floor((l + r) / 2)

        if (nums[m] < nums[r]) r = m
        else l = m + 1
    }

    return nums[l]
};
```

- **time complexity** `O(log n)` -> halves the search space every time
- **space complexity** `O(1)` -> no extra space 


## Edge / Important Cases
- DO NOT use `r = m - 1` when `nums[m] < nums[r]` -> because m could be the minimum, skipping it will lose the correct answer. BUT we can still use `l = m + 1` because if a one of the half is sorted, meaning the minimum cant be there.
- `if (nums[l] < nums[r]) return nums[l]`, if no rotation, return immediately

## Lesson Learned
- this is "binary search on structure" pattern that search for the **minimum** not for a value match so we cant immediately return the `m`