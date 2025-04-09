## Approach
This problem requires us to search for a `target` in an array that is sorted in ascending order but then rotated at an unknown pivot. The constraint is that we must use binary search.

this problems is unique, we need to really understand what to do with the rotated array, what does that effects to binary search ? how can we still implement binary search ? after working on my scratch whiteboard, illustrating "what if's", i found that it has 2 important condition that can lead to the solutions.

first, like the usual binary search, we calculate the midpoint of the array and we have to know which sides that offers the SORTED / ASCENDING order ? the left-to-mid or mid-to-right ? we can check this by using simple conditional statement, after that, we can check on the ascending side, for example on left-to-mid side, we need to make sure that the `target` is available on this side by using `left <= target < mid`, and if not, so the target is on mid-to-right that, simple, right ? and we can implement this until we get the answer.

so the 2 important condition is :
- first, check whos side is ascending/sorted ? left-to-mid or mid-to-right ?
- second, is to check if the target is on the ascending side

Detailed approach :
- loop while left is less than or equal to right
    - determine mid index, if mid is equal to target, return it
    - if the left side is sorted (`nums[left] <= nums[mid]`)
        - if the target is within the left half, search left (`r = m - 1`)
        - otherwise, search right (`l = m + 1`)
    - if the right is sorted
        - if the target is within the right half, search right (`l = m + 1`)
        - otherwise, search left (`r = m - 1`)

```js
var search = function (nums, target) {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)

        if (nums[m] == target) return m
        if (nums[l] <= nums[m]) {
            if ((nums[l] <= target) && (target < nums[m])) r = m - 1
            else l = m + 1
        } else {
            if ((nums[m] < target) && (target <= nums[r])) l = m + 1
            else r = m - 1
        }
    }

    return -1
};
```

- **time complexity** `O(log n)` -> halves the search space every time
- **space complexity** `O(1)` -> no extra space 

## Edge Cases
- `(nums[m] < target)` && `(target < nums[m])`, use strict `<` instead of `<=` because there are already statement if `target == nums[m]` it will return solves the solution.

## Illustration & Dry Run

![Search in Rotated Sorted Array](https://github.com/user-attachments/assets/4eeb457e-f68e-426c-863d-d8a865d45323)

## Lesson Learned
- learned how to apply binary search on a rotated sorted array by detecting the sorted half and narrowing down based on the target's position.
